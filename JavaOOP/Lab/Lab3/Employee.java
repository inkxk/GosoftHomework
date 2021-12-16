public class Employee {
    
    public String firstName;
    public String lastName;
    private int salary;
   
    public Employee(String firstNameInput, String lastNameInput, int salaryInput) {
        firstName = firstNameInput;
        lastName = lastNameInput;
        salary = salaryInput;
    }
    public void hello() {
        System.out.println("Hello " + firstName );
    }
    public int getSalary() {
        return salary;
    }
   }
   
   