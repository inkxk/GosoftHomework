public class Developer extends Employee{

    public String useOS;

    public Developer(String firstNameInput, String lastNameInput, int salaryInput, String OS) {
        super(firstNameInput, lastNameInput, salaryInput);
        useOS = OS;
    }
    
    public static void main(String[] args) {
        
        Developer[] arr;
        arr = new Developer[2];

        arr[0] = new Developer("Harry", "Potter", 20000, "Mac");
        arr[1] = new Developer("Thomas", "Shelby", 35000, "Linux");

    }

}
