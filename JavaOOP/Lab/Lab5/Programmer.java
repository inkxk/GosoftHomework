public class Programmer extends Employee{

    public String useOS;

    public Programmer(String firstNameInput, String lastNameInput, int salaryInput, String OS) {
        super(firstNameInput, lastNameInput, salaryInput);
        useOS = OS;
    }
    
    public static void main(String[] args) {
        
        Programmer[] arr;
        arr = new Programmer[2];

        arr[0] = new Programmer("Harry", "Potter", 20000, "Mac");
        arr[1] = new Programmer("Thomas", "Shelby", 35000, "Linux");

    }

}
