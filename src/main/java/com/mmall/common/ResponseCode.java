package com.mmall.common;

public enum ResponseCode {
	// 为了规避 魔鬼数字，可以使用枚举类型来表示一些数字代表的意义
	// 格式：字符串表示(数值，解释)
    SUCCESS(0,"SUCCESS"),
    ERROR(1,"ERROR"),
    NEED_LOGIN(10,"NEED_LOGIN"),
    ILLEGAL_ARGUMENT(2,"ILLEGAL_ARGUMENT");
	
	// 声明枚举类型的属性
    private final int code;
    private final String desc;

	// 枚举类型的构造器
    ResponseCode(int code,String desc){
        this.code = code;
        this.desc = desc;
    }
	
	// 对外开放获取属性的方法
    public int getCode(){
        return code;
    }
    public String getDesc(){
        return desc;
    }

}
