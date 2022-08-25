function SanPhamService() {
  
    this.getProductListIP = function () {

        return axios({
            method: 'get',
            url: 'https://62fe31e541165d66bfbabaec.mockapi.io/products',
           
          });
            
           
        

    }
    // this.addProduct = function (sp) {
    //     console.log(sp);
   
    //     return axios({
    //         method: 'post',
    //         url: `https://62fe31e541165d66bfbabaec.mockapi.io/products`,
    //         data: sp 
    //     });
    // }
    // this.deleteProduct = function (id) {
        
    //     return axios({
    //         method: 'delete',
    //         url: `https://62fe31e541165d66bfbabaec.mockapi.io/products`,

    //     });
       
    // }
    // this.getProductDetail = function (id) {
    //     return  axios({
    //         method: 'get',
    //         url: `https://62fe31e541165d66bfbabaec.mockapi.io/products`,

    //     });
        
    // }
    // this.updateproduct = function (id, sp) {
     
    //     return axios({
    //         method: 'put',
    //         url: `https://62fe31e541165d66bfbabaec.mockapi.io/products`,
    //         data: sp
    //     });
       
    // }
}