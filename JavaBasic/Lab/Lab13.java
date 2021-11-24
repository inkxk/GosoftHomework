public class Lab13 {
    public static void main(String[] args) {

        int[][] twoDArray = {{1, 2, 3}, {4, 5, 6}, {7, 8, 9}};
        for (int[] row : twoDArray) {
            for (int element : row) {
                System.out.println(element);
            }
        }

        int sum = twoDArray[0][2] + twoDArray[1][2] + twoDArray[2][2];
        System.out.println(sum);

    }
}
