import java.io.*;  
 import java.sql.*;    
 import java.util.*;  
 public class DBSwitch  
  {  
  public static void main(String[] args) throws Exception   
   {   
      String pid,pname,pdesc;    
      Connection con=null;  
      Statement s=null;  
      ResultSet rs=null;  
     int ch;  
     boolean flag=true;  
           Scanner sc=new Scanner(System.in);  
  try   
    {  
//CHANGE THIS LINE
   Class.forName("com.mysql.cj.jdbc.Driver");  
      System.out.println("Successfully registered driver");  
   con=DriverManager.getConnection("jdbc:mysql://localhost:3306/db","root","");  
      System.out.println("Got connected with DB");  
    }  
      catch(Exception e)  
    {  
    System.out.println("error1"+e);  
    
    }      
        
 do  
 {   
 System.out.println("Press 1 to INSERT into the DB");  
  System.out.println("Press 2 to DELETE from DB");  
  System.out.println("Press 3 to UPDATE into DB");  
 System.out.println("Press 4 to VIEW ALL from DB");  
 System.out.println("Press 5 to EXIT");  
 System.out.println("Enter your choice");  
 ch=Integer.parseInt(sc.nextLine());  
   
 switch(ch)  
 {  
 case 1:  
    
  System.out.println(" enter pid");  
   pid=sc.nextLine();  
   System.out.println(" enter pname");  
   pname=sc.nextLine();  
   System.out.println(" enter pdesc");  
   pdesc=sc.nextLine();   
    try  
   {  
    String query="Insert into parts values('"+pid+"','"+pname+"','"+pdesc+"')";  
   s=con.createStatement();  
   s.executeUpdate(query);  
   System.out.println("row inserted");  
    }  
   
      catch(Exception e)  
    {  
    System.out.println("error2"+e);  
    
    }      
   break;  
    
 case 2:  
   
    try  
   {  
       System.out.println("Eneter the pid");  
       String str2=sc.nextLine();  
    //String query="delete from stud where usn=str2";  
    s=con.createStatement();  
    int x=s.executeUpdate("delete from parts where pid="+"'"+str2+"'");  
    System.out.println("deleted rows are:"+x);  
   
   }  
    catch(Exception e)  
    {  
    System.out.println("error3"+e);  
    
    }     
   break;  
   
 case 3:  
   
  try  
   {  
    System.out.println("enter parts id to be updated");  
    String pid1=sc.nextLine();  
    String query="update parts set pdesc='werd' where pid='"+pid1+"'";  
    s=con.createStatement();  
    int x=s.executeUpdate(query);  
    System.out.println("updated rows are:"+x);  
   
   }  
    catch(Exception e)  
    {  
    System.out.println("error4"+e);  
    
    }     
   break;  
   
 case 4:  
   
   try  
   {  
   
   String query="select * from parts ";  
   s=con.createStatement();  
   rs=s.executeQuery(query);  
   boolean rec=rs.next();  
   while(!rec)  
   
   {  
   System.out.println("no record");  
    }      
   
   do  
   {  
      pid=rs.getString(1);  
      pname=rs.getString(2);  
      pdesc=rs.getString(3);  
      System.out.print(pid+"\t");  
      System.out.print(pname+"\t");  
      System.out.println(pdesc);  
   
   }while(rs.next());  
     
 s.close();  
 con.close();  
    
   }  
   
    catch(Exception e)  
    {  
    System.out.println("error5"+e);  
    
    }      
  break;  
 case 5:  
  System.exit(1);  
    break;  
   
 default:  
   System.out.println("iam default");  
   
 }  
 System.out.println("do u want to continue(yes /no)");  
 String str=sc.nextLine();  
 if(str.equals("yes")|| str.equals("y"))  
 flag=true;  
 if(str.equals("no")||str.equals("no"))  
 flag=false;  
   
 }while(flag);    
  }  
 }  