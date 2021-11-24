public class Lab6 {
    public static void main(String[] args) {
        
        // number1
        int i = 1;
        while (i <= 10) {
            System.out.println(i);
            i++;
        }

        // number2
        int sum = 0;
        for (int j = 1; j <= 10; j++) {
            sum += j;
        }
        System.out.println(sum);

        // number3
        int sumX = 0;
        for (int x = 1; x <= 100; x++) {
            if (x % 12 == 0) {
                sumX += x;
            }
        }
        System.out.println(sumX);

        // number4
        int myArray[] = {1, 2, 3, 4, 5};
        for (int counter : myArray) {
            System.out.println("Counter: " + counter);
        }

    }
}
