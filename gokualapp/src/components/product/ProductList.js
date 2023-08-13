import { MantineProvider, useMantineTheme, Box } from "@mantine/core";
import { MantineReactTable } from "mantine-react-table";
import { useMemo, useState } from "react";

const ProductList = (props) => {

  const globalTheme = useMantineTheme();
  const [rowSelection, setRowSelection] = useState({});




  const columns = useMemo(
    //column definitions...
    () => [
      {
        accessorKey: "sku",
        header: "SKU",
        size: 50,
      },
      {
        accessorKey: "name",
        header: "Product Name",
        size: 50,
      },
      {
        accessorKey: "size",
        header: "Size",
        size: 50,
      },
      {
        accessorKey: "pack",
        header: "Pack",
        size: 50,
      },
      {
        accessorKey: "quantity",
        header: "Quantity",
        size: 50,
      },
      {
        accessorKey: "department",
        header: "Department",
        size: 50,
      },
      {
        accessorKey: "price",
        header: "Price",
        size: 50,
      },

      {
        accessorKey: "status",
        header: "Status",
        size: 50,
      },
    ],
    [] //end
  );

  return (
    <MantineProvider
      theme={{
        ...globalTheme,
        primaryColor: "cyan",
        primaryShade: 9,
      }}
    >
      <MantineReactTable
        displayColumnDefOptions={{
          "mrt-row-actions": {
            mantineTableHeadCellProps: {
              align: "center",
            },
            size: 50,
          },
        }}
        columns={columns}
        data={props.ProductListReducer ?? []}
        enableStickyHeader
        positionToolbarAlertBanner={"bottom"}
        positionActionsColumn={"last"}
        enableRowNumbers
        enableFooter={true}
        initialState={{
          showGlobalFilter: true,
          density: "sm",
        }}
        enablePagination={false}
        positionGlobalFilter="left"
        enableDensityToggle={false}
        enableMultiRowSelection={false}
        mantineTableBodyRowProps={({ row }) => ({
          onClick: () => {
            // setbutton2((prev) => !prev);
            setRowSelection((prev) => ({
              [row.id]: !prev[row.id],
            }));
            props.setEditID(row.original.id);
            props.setEditProduct(row.original.id);

          },

          selected: rowSelection[row.id],

          color: "green",
          sx: {
            cursor: "pointer",
          },
        })}
        state={{ rowSelection, isLoading: props.listLoad }}
        mantineTableContainerProps={{
          sx: {
            minHeight: "42vh",
            maxHeight: "42vh",
          },
        }}
      />
    </MantineProvider>

  )

}

export default ProductList;