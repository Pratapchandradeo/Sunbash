package com.Sunbash.ExceptionHandler;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

@RestControllerAdvice
public class GlobalExceptionHandler {
	
	@ExceptionHandler(ResourseNotFoundException.class)
	public ResponseEntity<ApiResponse> resourseNotFoundExceptionHandler(ResourseNotFoundException ex){
		String message = ex.getMessage();
		ApiResponse apiResponse = new ApiResponse(message, false);
		
		return new ResponseEntity<>(apiResponse,HttpStatus.INTERNAL_SERVER_ERROR);
	}

	@ExceptionHandler(BodyNotFoundException.class)
	public ResponseEntity<ApiResponse> bodyNotFoundExceptionHandler(BodyNotFoundException ex){
		ApiResponse apiResponse = new ApiResponse(ex.getMessage(),false);
		
		 return new ResponseEntity<ApiResponse>(apiResponse,HttpStatus.BAD_REQUEST);
	}
}
