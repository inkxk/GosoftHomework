public class Employee {
    public   String firstName;
    public   String lastName;
    private  int salary;
    public Employee(String firstNameInput, String lastNameInput, int salaryInput) {
        this.firstName = firstNameInput;
        this.lastName = lastNameInput;
        this.salary = salaryInput;
    }
    public void hello() {
        System.out.println("Hello " + this.firstName );
    }
    public int getSalary() {
        return salary;
    }

    public String getFirstName() {
        return firstName;
    }

 }
  
  
 