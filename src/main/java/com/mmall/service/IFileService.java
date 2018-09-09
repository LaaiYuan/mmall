package com.mmall.service;

import org.springframework.web.multipart.MultipartFile;

/**
 * 文件上传处理接口
 */
public interface IFileService {
    String upload(MultipartFile file, String path);
}
