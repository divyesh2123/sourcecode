import { MantineProvider, useMantineTheme, Box } from "@mantine/core";
import { MantineReactTable } from "mantine-react-table";
import { useMemo, useState } from "react";
import { deleteDepartmentReq } from "../../redux/department/actions";
import swal from "sweetalert";
import { useDispatch } from "react-redux";

const DepartmentList = (props) => {

    const globalTheme = useMantineTheme();
    const { colorScheme } = useMantineTheme();
    const [rowSelection, setRowSelection] = useState({});
    const dis = useDispatch();

    const handleDeleteRow = async (row) => {
  

       let data = await swal({
          title: "Are you sure?",
          text: "Please confirm that you want to delete the Department.",
          icon: "warning",
          dangerMode: true,
          buttons: {
            confirm: {
              text: "confirm",
              value: null,
              visible: true,
              className: "btn custom-Green add-btn",
              closeModal: true,
            },
            cancel: {
              text: "cancel",
              value: true,
              visible: true,
              className: "btn custom-Red add-btn fw-medium",
              closeModal: true
            }
          }
         
        });

        if(!data)
        {
          
          dis(deleteDepartmentReq(row.id));
        }
      };

      console.log(props);

    const columns = useMemo(
        //column definitions...
        () => [
          {
            accessorKey: "name",
            header: "Department",
            size: 50,
          },
          {
            accessorKey: "sIsTaxable",
            header: "Taxable",
            size: 50,
          },
    
          {
            accessorKey: "sAllowFoodStamp",
            header: "Food Stamp",
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
          data={props.departmentListReducer ?? []}
          getRowId={(row) => row.id}
          enableStickyHeader
          positionActionsColumn={"last"}
          enableRowNumbers
          enableFooter={true}
          initialState={{
            showGlobalFilter: true,
            density: "sm",
          }}
          enablePagination={true}
          positionGlobalFilter="left"
          enableDensityToggle={false}
          enableEditing
          renderRowActions={({ row, table }) => (
            <Box
              sx={{
                display: "flex",
                gap: "10px",
                justifyContent: "center",
              }}
            >
              <i
                className="btn btn btn-primary fst-normal"
                onClick={() => {
                  console.log("row id", row.original);
                  props.setEditID(row.id);
                  props.handleopeModel();
                }}
                
              >
                {"Edit"}
              </i>
              <i
                className="btn btn btn-danger fst-normal"
                onClick={() => handleDeleteRow(row)}
              >
                {"  Delete"}
              </i>
            </Box>
          )}
          mantineTableContainerProps={{
            sx: { minHeight: "520px", maxHeight: "520px" },
          }}
          mantineTableProps={{
            highlightOnHover: true,
            withColumnBorders: true,
            withBorder: colorScheme === "light",
          }}
          state={{ rowSelection, isLoading: props.listLoadData }}
        />
      </MantineProvider>

    )

}

export default DepartmentList;