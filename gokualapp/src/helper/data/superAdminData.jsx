
const modules = [
    {
      linkTo: "/ManageDepartment",
      bgColor: "#ff9c46",
      name: "Department",
      imageSrc: require("../../Theme/assets/images/icons/DEPARTMENT.png"),
    },
    {
      linkTo: "/ManageCategory",
      bgColor: "custom-Red",
      name: "Category",
      imageSrc: require("../../Theme/assets/images/icons/CATEGORY.png"),
    },
    {
      linkTo: "/ManageBrand",
      bgColor: "rgb(22,9,240)",
      name: "Brand",
      imageSrc: require("../../Theme/assets/images/icons/MANUFACTURE.png"),
    },
    {
      linkTo: "/ManageUOM",
      bgColor: "custom-Blue",
      name: "UOM",
      imageSrc: require("../../Theme/assets/images/icons/MANAGE UOM.png"),
    },
  
    {
      linkTo: "/ManageSpecification",
      bgColor: "rgba(2,126,251,1)",
      name: "Specification",
      imageSrc: require("../../Theme/assets/images/icons/STORE ANALYSIS.png"),
    },
    {
      linkTo: "/ManageTax",
      bgColor: "custom-Green",
      name: "Tax",
      imageSrc: require("../../Theme/assets/images/icons/TAX.png"),
    },
    {
      linkTo: "/ManageFacility",
      bgColor: "custom-Blue",
      name: "Facility",
      imageSrc: require("../../Theme/assets/images/icons/EMPLOYEE.png"),
    },
    {
      linkTo: "/ManageVendor",
      bgColor: "rgba(2,126,251,1)",
      name: "Vendor",
      imageSrc: require("../../Theme/assets/images/icons/EMPLOYEE.png"),
    },
    {
      linkTo: "/ManageTaxGroup",
      bgColor: "custom-Green",
      name: "Tax Group",
      imageSrc: require("../../Theme/assets/images/icons/TAX.png"),
    },
    {
      linkTo: "/ManageProduct",
      bgColor: "#ff9c46",
      name: "Product",
      imageSrc: require("../../Theme/assets/images/icons/MANAGE PRODUCT.png"),
    },
  ];

  export const ItemTypeGroup = [
    {
      options: [
        { label: "Standard", value: "1" },
        { label: "Multi-Pack", value: "2" },
      ],
    },
  ];

  
  export default modules;
  