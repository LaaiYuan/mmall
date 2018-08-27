package com.mmall.service.impl;

import com.google.common.base.Splitter;
import com.google.common.collect.Lists;
import com.mmall.common.Const;
import com.mmall.common.ResponseCode;
import com.mmall.common.ServerResponse;
import com.mmall.dao.CartMapper;
import com.mmall.dao.ProductMapper;
import com.mmall.pojo.Cart;
import com.mmall.pojo.Product;
import com.mmall.service.ICartService;
import com.mmall.util.BigDecimalUtil;
import com.mmall.util.PropertiesUtil;
import com.mmall.vo.CartProductVo;
import com.mmall.vo.CartVo;
import org.apache.commons.collections.CollectionUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.math.BigDecimal;
import java.util.List;

/**
 * Created by Administrator on 2018/5/29.
 */
@Service("iCartService")
public class CartServiceImpl implements ICartService {

    @Autowired
    private CartMapper cartMapper;
    @Autowired
    private ProductMapper productMapper;

    public ServerResponse<CartVo> add(Integer userId,Integer productId,Integer count){
       // 当传入的产品或者添加的数量为空时，提示参数错误
        if(productId == null || count == null){
            return ServerResponse.createByErrorCodeMessage(ResponseCode.ILLEGAL_ARGUMENT.getCode(),ResponseCode.ILLEGAL_ARGUMENT.getDesc());
        }

        // 通过用户和产品查找对应的购物车对象
        Cart cart = cartMapper.selectCartByUserIdProductId(userId,productId);
        if(cart == null){
            //该用户还未添加这个产品到购物车,需要新增这个产品的购物车记录
            Cart cartItem = new Cart();
            cartItem.setQuantity(count);
            cartItem.setChecked(Const.Cart.CHECKED);
            cartItem.setProductId(productId);
            cartItem.setUserId(userId);
            cartMapper.insert(cartItem); // 修改数据库
        }else{
            //该用户已经添加过这个产品到购物车,则数量相加
            count = cart.getQuantity() + count;
            cart.setQuantity(count);
            cartMapper.updateByPrimaryKeySelective(cart); // 修改数据库
        }
        // 返回购物车列表
        return this.list(userId);
    }

    // 公共类：返回购物车 List
    public ServerResponse<CartVo> list (Integer userId){
        CartVo cartVo = this.getCartVoLimit(userId);
        return ServerResponse.createBySuccess(cartVo);
    }

    // 获取用户的购物车列表
    private CartVo getCartVoLimit(Integer userId){
        // 创建一个购物车对象
        CartVo cartVo = new CartVo();
        // 根据用户查找购物车(为了获得该用户购物车中的商品)
        List<Cart> cartList = cartMapper.selectCartByUserId(userId);
        // 创建一个购物车商品列表对象
        List<CartProductVo> cartProductVoList = Lists.newArrayList();
        // 购物车选中商品总价格
        BigDecimal cartTotalPrice = new BigDecimal("0");
        // 遍历购物车列表，将商品信息添加到 购物车商品列表 中
        if(CollectionUtils.isNotEmpty(cartList)){
            for(Cart cartItem : cartList){
                CartProductVo cartProductVo = new CartProductVo();
                cartProductVo.setId(cartItem.getId());
                cartProductVo.setUserId(userId);
                cartProductVo.setProductId(cartItem.getProductId());

                Product product = productMapper.selectByPrimaryKey(cartItem.getProductId());
                if(product != null){
                    cartProductVo.setProductMainImage(product.getMainImage());
                    cartProductVo.setProductName(product.getName());
                    cartProductVo.setProductSubtitle(product.getSubtitle());
                    cartProductVo.setProductStatus(product.getStatus());
                    cartProductVo.setProductPrice(product.getPrice());
                    cartProductVo.setProductStock(product.getStock());
                    // 购买数量。设置初始值 0
                    int buyLimitCount = 0;
                    // 判断库存
                    if(product.getStock() >= cartItem.getQuantity()){
                        //库存充足
                        buyLimitCount = cartItem.getQuantity();
                        cartProductVo.setLimitQuantity(Const.Cart.LIMIT_NUM_SUCCESS);
                    }else{
                        //获取商品库存
                        buyLimitCount = product.getStock();
                        cartProductVo.setLimitQuantity(Const.Cart.LIMIT_NUM_FAIL);
                        //购物车中更新有效库存
                        Cart cartForQuantity = new Cart();
                        cartForQuantity.setId(cartItem.getId());
                        cartForQuantity.setQuantity(buyLimitCount);
                        cartMapper.updateByPrimaryKeySelective(cartForQuantity);
                    }
                    // 设置购买数量
                    cartProductVo.setQuantity(buyLimitCount);
                    //计算总价
                    cartProductVo.setProductTotalPrice(BigDecimalUtil.mul(product.getPrice().doubleValue(),cartProductVo.getQuantity()));
                    cartProductVo.setProductChecked(cartItem.getChecked());
                }

                if(cartItem.getChecked() == Const.Cart.CHECKED){
                    //如果已经勾选,增加到整个的购物车总价中
                    cartTotalPrice = BigDecimalUtil.add(cartTotalPrice.doubleValue(),cartProductVo.getProductTotalPrice().doubleValue());
                }
                cartProductVoList.add(cartProductVo);
            }
        }
        cartVo.setCartTotalPrice(cartTotalPrice);
        cartVo.setCartProductVoList(cartProductVoList);
        cartVo.setAllChecked(this.getAllCheckedStatus(userId));
        cartVo.setImageHost(PropertiesUtil.getProperty("ftp.server.http.prefix"));

        return cartVo;
    }

    // 货物商品是否全选
    private boolean getAllCheckedStatus(Integer userId){
        if(userId == null){
            return false;
        }
        // 查询该客户购物车中未被选中的商品数量，若等于0返回 true
        return cartMapper.selectCartProductCheckedStatusByUserId(userId) == 0;
    }

    // 修改购买数量
    public ServerResponse<CartVo> update(Integer userId,Integer productId,Integer count){
        if(productId == null || count == null){
            return ServerResponse.createByErrorCodeMessage(ResponseCode.ILLEGAL_ARGUMENT.getCode(),ResponseCode.ILLEGAL_ARGUMENT.getDesc());
        }
        // 通过用户和商品查找购物车对象
        Cart cart = cartMapper.selectCartByUserIdProductId(userId,productId);
        // 修改购物车商品的购买数量
        if(cart != null){
            cart.setQuantity(count);
        }
        cartMapper.updateByPrimaryKey(cart);
        return this.list(userId);
    }

    // 删除购物车的商品
    public ServerResponse<CartVo> deleteProduct(Integer userId,String productIds){
        // 传入的是多个商品id用逗号隔开组成的字符串,将其分割成列表
        List<String> productList = Splitter.on(",").splitToList(productIds);
        if(CollectionUtils.isEmpty(productList)){
            return ServerResponse.createByErrorCodeMessage(ResponseCode.ILLEGAL_ARGUMENT.getCode(),ResponseCode.ILLEGAL_ARGUMENT.getDesc());
        }
        cartMapper.deleteByUserIdProductIds(userId,productList);
        return this.list(userId);
    }

    /**
     * 修改是否选中
     * @param userId 用户ID
     * @param productId 产品ID，若为全选，产品ID为null
     * @param checked 是否选中
     * @return
     */
    public ServerResponse<CartVo> selectOrUnSelect (Integer userId,Integer productId,Integer checked){
        cartMapper.checkedOrUncheckedProduct(userId,productId,checked);
        return this.list(userId);
    }

    // 获取购物车商品总数量
    public ServerResponse<Integer> getCartProductCount(Integer userId){
        if(userId == null){
            return ServerResponse.createBySuccess(0);
        }
        return ServerResponse.createBySuccess(cartMapper.selectCartProductCount(userId));
    }
}
