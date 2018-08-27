package com.mmall.service.impl;

import com.google.common.collect.Lists;
import com.mmall.service.IFileService;
import com.mmall.util.FTPUtil;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.util.UUID;

/**
 * Created by Administrator on 2018/5/27.
 */
@Service("iFileService")
public class FileServiceImpl implements IFileService {

    private Logger logger = LoggerFactory.getLogger(FileServiceImpl.class);


    public String upload(MultipartFile file, String path){
        // 获取原始文件名
        String fileName = file.getOriginalFilename();
        // 通过原始文件名获取扩展名：字符串截取。
        // 通过 +1 去掉扩展名的 .
        String fileExtensionName = fileName.substring(fileName.lastIndexOf(".")+1);
        // 生成新文件名，防止不同用户上传同名文件被覆盖
        String uploadFileName = UUID.randomUUID().toString()+"."+fileExtensionName;
        // 打印日志
        logger.info("开始上传文件,上传文件的文件名:{},上传的路径:{},新文件名:{}",fileName,path,uploadFileName);

        // 若上传文件的目录不存在，创建目录
        File fileDir = new File(path);
        if(!fileDir.exists()){
            // 赋予可写权限。启动 Tomcat 之后不一定会有这个权限因此要在代码中赋予
            fileDir.setWritable(true);
            fileDir.mkdirs();
        }
        File targetFile = new File(path,uploadFileName);


        try {
            // 文件上传成功
            file.transferTo(targetFile);
            // 上传到ftp服务器上
            FTPUtil.uploadFile(Lists.newArrayList(targetFile));
            // 删除 Tomcat 服务器上的文件，即 webapp 下的
            targetFile.delete();
        } catch (IOException e) {
            logger.error("上传文件异常",e);
            return null;
        }
        return targetFile.getName();
    }}
