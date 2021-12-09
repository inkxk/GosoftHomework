import java.util.Scanner;

public class Ecommerce {
    public static Scanner input = new Scanner(System.in);

    public static void readInput(State state, Category productList) {
        if (state.isHome == true) {
            readInputMain(state, productList);
        } else {
            if (state.isAdmin == Mode.CUSTOMER) {
                readAdminInput(state, productList);
            } else if (state.isAdmin == Mode.MERCHANT) {
                readCustomerCommand(state, productList);
            }
        }
    }

    public static void readInputMain(State state, Category productList) {
        System.out.println("Who are you?\n 1.Customer \n 2.Merchant \n");

        int number = input.nextInt();
        state.isHome = false;
        state.isAdmin = (number == 2 ? Mode.MERCHANT : Mode.CUSTOMER);
        readInput(state, productList);
    }

    public static void CustomerAddProductToCart(State state, Category productList) {
        System.out.println("Type Product's id that you want to add to cart: ");

        int number = input.nextInt();
        System.out.println(number);
        String text = String.valueOf(number);

        state.addProductByID(text, productList);

        System.out.println("DONE!");
    }

    public static void CustomerRemoveProductFromCart(State state, Category productList) {
        System.out.println("Type Product's id that you want to remove: ");

        int number = input.nextInt();
        String text = String.valueOf(number);
        state.RemoveProductByID(text);

        System.out.println("done");
    }

    public static void SellerAddProduct(State state, Category productList) {
        System.out.println("Type Product's id that you want to add: ");
        String id = input.next();
        System.out.println("Name: ");
        String name = input.next();
        System.out.println("Price: ");
        int price = input.nextInt();

        Product item = new Product(id, name, price);

        productList.addProduct(item);

        System.out.println("done");
    }

    public static void SellerRemoveProduct(State state, Category productList) {

        System.out.println("Type Product's id that you want to remove: ");
        String id = input.next();
        productList.removeProduct(id);

        System.out.println("done");
    }

    public static void readCustomerCommand(State state, Category productList) {   
        System.out.println(
                "What do you want to do?\n 0.Show All Products in the Shop\n 1.Show All Products In the Shopping Cart\n 2.Add Product to Shopping Cart\n 3.Remove Product From Shopping Cart\n 4.Back to Main Menu");

        int n = input.nextInt();

        if (n == 0){
            productList.showProduct();
        }

        if (n == 1) {
            state.showProducts();
        }
            
        if (n == 2) {
            CustomerAddProductToCart(state, productList);
        }

        if (n == 3) {
            CustomerRemoveProductFromCart(state, productList);
        }

        if (n == 4) {
            state.isHome = true;
        }

        readInput(state, productList);

    }

    public static void readAdminInput(State state, Category productList) {

        productList.showProduct();
        System.out.println("What do you want to do?\n 0.Show All Products\n 1.Add Product\n 2.Remove Product\n 3.Back to Main Menu");
        int n = input.nextInt();
        if (n == 0) {
            productList.showProduct();
        }
            
        if (n == 1) {
            SellerAddProduct(state, productList);
        }
            
        if (n == 2) {
            SellerRemoveProduct(state, productList);
        }
            
        if (n == 3) {
            state.isHome = true;
        }
            
        readInput(state, productList);
    }


    public static void main(String[] agrs) {

        Product beer = new Product("0", "Beer", 12);
        Product snack = new Product("1", "Snack", 2);
        Product water = new Product("2", "Water", 1);
        Category productCategory = new Category();
        productCategory.addProduct(beer);
        productCategory.addProduct(snack);
        productCategory.addProduct(water);
        productCategory.removeProduct("2");
        System.out.println(productCategory.getProductById("0"));

        readInput(State.getInstance(), productCategory);

    }

}
