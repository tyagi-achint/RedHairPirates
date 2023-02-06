
import java.sql.*;

public class JDemo1
{
 public static void main(String args[]) 
 {
	 String pid = "30";
     String pname = "chesi";
     String pdesc = "abcd";
  try
{
   Class.forName("com.mysql.cj.jdbc.Driver");
   System.out.println("Driver loaded !");
  Connection con = DriverManager.getConnection("jdbc:mysql://localhost:3306/db","root","");
  System.out.println("Connected !"); 
  Statement stmt = con.createStatement();
  String q1 = "insert into parts values('" +pid+ "', '" +pname+
          "', '" +pdesc+ "')";
int x = stmt.executeUpdate(q1);
if (x > 0)           
System.out.println("Successfully Inserted");           
else           
System.out.println("Insert Failed");
  
  stmt.executeUpdate(q1);
  stmt.close();
  con.close();
System.out.println("Done");

 }catch(ClassNotFoundException ce)
{
ce.printStackTrace();
}
catch(SQLException ce)
{
ce.printStackTrace();
}
 }
}