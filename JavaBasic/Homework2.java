public class Homework2 {

    public static void multiplyTable(String[][] table) {
        for (int row = 0; row < table.length; row++) {
            for (int column = 0; column < table[0].length; column++) {
                System.out.printf("%d, ", Integer.parseInt(table[row][column]) * 2);
            }
            System.out.print('\n');
        }
    }

    public static void main(String[] args) {
        String[][] table = { { "1", "2", "3" }, { "4", "5", "6" }, { "7", "8", "9" } };
        multiplyTable(table);
    }
}
