class clother {
    constructor(id, type, name, desc, imgSrc_jpg, imgSrc_png) {
        this.id = id;
        this.type = type;
        this.name = name;
        this.desc = desc;
        this.imgSrc_jpg = imgSrc_jpg;
        this.imgSrc_png = imgSrc_png;
    }
    return (index){
        return  `
        <div class="col-3 pt-3"id=${this.id}>
        <img src="./assets/images/clothes/${this.imgSrc_jpg}" alt="">
        <h4>${this.name}</h4>
        <button class="btn btn-danger">Thử đồ</button>
      </div>
        `;
    }
    
}
