import java.util.ArrayList;

public class State {
    private static State instance;

    public static State getInstance() {
        
        if (instance == null) {
            instance = new State();
        }

        return instance;
    }

    public Mode isAdmin = Mode.CUSTOMER;
    public boolean isHome  = true;
    public ArrayList<Product> shoppingCart = new ArrayList<Product>();

    public void showProducts() {
        System.out.println("Products in the Cart");
        for (int item=0; item<shoppingCart.size(); item++) {
            System.out.printf(
            "ID : %s Name : %s  Price :%d\n", 
            this.shoppingCart.get(item).ID, 
            this.shoppingCart.get(item).name,
            this.shoppingCart.get(item).price
            );
        }
    }

    public void addProductByID(String id, Category category){
        Product item = category.getProductById(id);
        this.shoppingCart.add(item);
    }

    public void RemoveProductByID(String id){
        this.shoppingCart.removeIf(item -> item.ID.equals(id));
    }

}
