public class CEO extends Employee {  
    public CEO(String firstNameInput, String lastNameInput, int salaryInput) {
        super(firstNameInput, lastNameInput, salaryInput);
    }
        @Override
    public int getSalary() {
        return   super.getSalary() * 2;
    }
    public void hello() {
        System.out.println("Hi, nice to meet you. "+this.firstName+"!");
    }
    public void fire(Employee employee) {
            System.out.println(employee.firstName + " has been fired!");
        }
}
      
      
     

