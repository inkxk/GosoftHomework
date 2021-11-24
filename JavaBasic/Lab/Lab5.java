public class Lab5 {

    public static void main(String[] args) {

        int score = 60;
        String grade = "";

        switch (score) {
            case 80:
                grade = "A";
                break;
            case 70:
                grade = "B";
                break;
            case 60:
                grade = "C";
                break;
            case 50:
                grade = "D";
                break;
            case 40:
                grade = "F";
                break;
            default:
                grade = "E";
                break;
        }

        System.out.println(grade);

    }
   
}
