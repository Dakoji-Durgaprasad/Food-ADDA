package com.pack.ofd.dao;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;

public class OnlineFoodDeliveryDAO {

	public boolean validatingUser(String email, String pswd) throws SQLException {
		
		try {
			Class.forName("com.mysql.cj.jdbc.Driver");
			Connection con =DriverManager.getConnection("jdbc:mysql://localhost:3306/Online_Food_Delivery","root","root");
			Statement st = con.createStatement();
			String loginValidateQuery = "SELECT email_id, password FROM user_info WHERE email_id = '"
					+ email + "&& password ='" + pswd
					+ "'";
			ResultSet rs = st.executeQuery(loginValidateQuery);
			while (rs.next()) {
				System.out.println("Login Successfull !!");
				return true;
			}
			con.close();
		} catch (Exception e) {
			e.printStackTrace();
		}
		return false;

	}
}
