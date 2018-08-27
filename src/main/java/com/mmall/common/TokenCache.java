package com.mmall.common;

import com.google.common.cache.CacheBuilder;
import com.google.common.cache.CacheLoader;
import com.google.common.cache.LoadingCache;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.util.concurrent.TimeUnit;

/**
 * Created by geely
 */
public class TokenCache {

    // 声明日志
    private static Logger logger = LoggerFactory.getLogger(TokenCache.class);

    // token 前缀
    public static final String TOKEN_PREFIX = "token_";

    // 声明一个静态的内存块,构建本地 cache
    // initialCapacity 设置缓存的初始化容量
    // maximumSize 最大缓存容量。当缓存内容超过此容量，将使用 LRU算法 移出最少使用的内容
    // expireAfterAccess 设置最大有效期，格式：（时间，单位）
    private static LoadingCache<String,String> localCache = CacheBuilder.newBuilder().initialCapacity(1000).maximumSize(10000).expireAfterAccess(12, TimeUnit.HOURS)
            .build(new CacheLoader<String, String>() {
                //默认的数据加载实现,当调用get取值的时候,如果key没有对应的值,就调用这个方法进行加载.
                @Override
                public String load(String s) throws Exception {
                    // 避免空指针异常，使用字符串的 null
                    return "null";
                }
            });

    public static void setKey(String key,String value){
        localCache.put(key,value);
    }

    public static String getKey(String key){
        String value = null;
        try {
            value = localCache.get(key);
            if("null".equals(value)){
                return null;
            }
            return value;
        }catch (Exception e){
            logger.error("localCache get error",e);
        }
        return null;
    }
}
