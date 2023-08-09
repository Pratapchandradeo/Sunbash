package com.Sunbash.ExceptionHandler;

public class BodyNotFoundException extends RuntimeException {
	
	
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	public BodyNotFoundException() {
		super("Body Not Found");
	}
	
	public BodyNotFoundException(String message) {
		super(message);
	}
}
