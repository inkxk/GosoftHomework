public class Lab4 {
    public static void main(String[] args) {
        
        int score = 30;
        boolean isHandSome = true;

        if (isHandSome) {
            System.out.println("Good");
        } else {
            if (score >= 80) {
                System.out.println("Good");
            } else if (score >= 50 && score < 80) {
                System.out.println("Normal");
            } else if (score < 50) {
                System.out.println("Fail");
            }
        }

    }
}
