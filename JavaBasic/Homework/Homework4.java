public class Homework4 {

    public static void main (String[] args) {

        Scanner input = new Scanner(System.in);
        System.out.print("Input n: ");
        int number = input.nextInt();
        input.close();

        for (int i = 1; i <= 12; i++) {
            int sum = i * number;
            String string = number + " x " + i + " = " + sum;
            System.out.println(string);
        }
    }

}