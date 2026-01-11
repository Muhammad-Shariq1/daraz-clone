import React, { useEffect, useState } from "react";

const Products = ({ searchTerm = "" }) => { 
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then(res => res.json())
      .then(data => {
        setProducts(data);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  if (loading) return <div className="flex justify-center mt-20 text-xl">Loading...</div>;

  const filteredProducts = products.filter(product =>
    product.title?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="max-w-7xl mx-auto mt-10 px-2 relative">
      {filteredProducts.length === 0 ? (
        <p className="text-center text-gray-500 mt-10">No products found</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {filteredProducts.map(product => (
            <div
              key={product.id}
              className="bg-white border rounded-md overflow-hidden shadow-sm hover:shadow-lg transition cursor-pointer"
              onClick={() => setSelectedProduct(product)}
            >
              <img src={product.image} alt={product.title} className="w-full h-[180px] object-cover" />
              <div className="p-2">
                <p className="text-sm text-gray-800 line-clamp-2">{product.title}</p>
                <div className="mt-2">
                  <span className="text-orange-500 font-semibold text-lg">${product.price}</span>
                </div>
                <div className="flex items-center text-sm text-gray-500 mt-1">
                  ⭐ {product.rating?.rate || 0} 
                  <span className="ml-1">({product.rating?.count || 0})</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      
      {selectedProduct && (
        <div className="fixed inset-0 z-50 flex justify-center items-center">
          <div className="absolute inset-0 bg-black/50 pointer-events-auto"></div>
          <div className="relative bg-white rounded-md shadow-lg max-w-lg w-full p-6 pointer-events-auto">
            <button
              className="mb-4 px-3 py-1 bg-gray-200 rounded hover:bg-gray-300"
              onClick={() => setSelectedProduct(null)}
            >
              ← Back
            </button>
            <img src={selectedProduct.image} alt={selectedProduct.title} className="w-full h-[300px] object-cover mb-4" />
            <h2 className="text-xl font-bold">{selectedProduct.title}</h2>
            <p className="text-gray-700 mt-2">{selectedProduct.description}</p>
            <div className="mt-3 text-orange-500 font-semibold text-lg">${selectedProduct.price}</div>
            <div className="flex items-center text-sm text-gray-500 mt-1">
              ⭐ {selectedProduct.rating?.rate || 0} 
              <span className="ml-1">({selectedProduct.rating?.count || 0})</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Products;
