function SelectedCloth() {
    this.selectedItem = {
      topclothes: "",
      botclothes: "",
      shoes: "",
      handbags: "",
      necklaces: "",
      hairstyle: "",
      background: "",
    };
    this.add = (item) => {
        switch (item.type) {
          case "topclothes":
            this.selectedItem.topclothes = item.imgSrc_png;
            document.getElementsByClassName(
              "bikinitop"
            )[0].style.backgroundImage = `url(${item.imgSrc_png})`;
            document.getElementsByClassName("bikinitop")[0].style.backgroundSize =
              "cover";
            break;
          case "botclothes":
            this.selectedItem.botclothes = item.imgSrc_png;
            document.getElementsByClassName(
              "bikinibottom"
            )[0].style.backgroundImage = `url(${item.imgSrc_png})`;
            document.getElementsByClassName(
              "bikinibottom"
            )[0].style.backgroundSize = "cover";
            break;
          case "shoes":
            this.selectedItem.shoes = item.imgSrc_png;
            document.getElementsByClassName(
              "feet"
            )[0].style.backgroundImage = `url(${item.imgSrc_png})`;
            document.getElementsByClassName("feet")[0].style.backgroundSize =
              "cover";
            break;
          case "handbags":
            this.selectedItem.handbags = item.imgSrc_png;
            document.getElementsByClassName(
              "handbag"
            )[0].style.backgroundImage = `url(${item.imgSrc_png})`;
            document.getElementsByClassName("handbag")[0].style.backgroundSize =
              "cover";
            break;
          case "necklaces":
            this.selectedItem.necklaces = item.imgSrc_png;
            document.getElementsByClassName(
              "necklace"
            )[0].style.backgroundImage = `url(${item.imgSrc_png})`;
            document.getElementsByClassName("necklace")[0].style.backgroundSize =
              "cover";
            break;
          case "hairstyle":
            this.selectedItem.hairstyle = item.imgSrc_png;
            document.getElementsByClassName(
              "hairstyle"
            )[0].style.backgroundImage = `url(${item.imgSrc_png})`;
            document.getElementsByClassName("hairstlye")[0].style.backgroundSize =
              "cover";
            break;
          case "background":
            this.selectedItem.background = item.imgSrc_png;
            document.getElementsByClassName(
              "background"
            )[0].style.backgroundImage = `url(${item.imgSrc_png})`;
            document.getElementsByClassName("background")[0].style.backgroundSize =
              "cover";
            break;
          default:
        }
      };
}