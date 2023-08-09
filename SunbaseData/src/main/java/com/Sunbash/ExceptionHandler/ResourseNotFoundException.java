package com.Sunbash.ExceptionHandler;


import java.util.UUID;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;


@NoArgsConstructor
@Getter
@Setter
public class ResourseNotFoundException extends RuntimeException {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	String resourceName;
	String fieldName;
	UUID fieldValue;
	String fieldValue1;
	
	public ResourseNotFoundException(String resourceName,String fieldname, UUID fieldValue) {
		super(String.format("%s not found with %s: %s", resourceName, fieldname,fieldValue));
		this.resourceName=resourceName;
		this.fieldName=fieldname;
		this.fieldValue=fieldValue;
	}
	
	public ResourseNotFoundException(String resourceName,String fieldname, String fieldValue1) {
		super(String.format("%s not found with %s: %s", resourceName, fieldname,fieldValue1));
		this.resourceName=resourceName;
		this.fieldName=fieldname;
		this.fieldValue1=fieldValue1;
	}
}
