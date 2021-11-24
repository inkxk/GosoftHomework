public class Lab10 {
    public static void main(String[] args) {
        for (int count = 0; count <= 10; count++) {
            if (count % 2 == 0) {
                continue;
            }
            System.out.println(count);
        }
    }
}
