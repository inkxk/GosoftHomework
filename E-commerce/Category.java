import java.util.ArrayList;

public class Category {
    public ArrayList<Product> products = new ArrayList<>();

    public void showProduct() {
        System.out.println("Product in Category");
        for(int i =0; i<this.products.size(); i++) {
            System.out.printf("ID : %s Name : %s  Price :%d\n" , this.products.get(i).ID , this.products.get(i).name ,this.products.get(i).price);
        }
    }

    public void addProduct(Product productInput) {
        this.products.add(productInput);
    }

    public void removeProduct(String id){
        this.products.removeIf(item -> item.ID.equals(id));
    }

    public Product getProductById(String ID) {
        for (Product product : this.products) { 
            if (product.ID.equals(ID)) {
                return product;
            }
         }
         Product item = new Product("0", "Beer", 12);
         return item;
    }

}
