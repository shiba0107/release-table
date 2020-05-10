import React from 'react';
import MaterialTable from 'material-table';
import BorderLinearProgress from './components/BorderLinearProgress';

export default function MaterialTableDemo() {
  const [state, setState] = React.useState({
    columns: [
      { title: 'Version', field: 'VersionName' },
      { title: 'Status', field: 'Status', initialEditValue: 'Created',editable: 'never'},
      { title: 'Progress', render: data => data ? <BorderLinearProgress variant="determinate" value={data.Progress} /> : '', initialEditValue:0 },
      { title: 'Start Date', field: 'Startdate', type:"date"  },
      { title: 'Release Date', field: 'Releasedate', type:"date" },
      { title: 'Description', field: 'Description' },
    ],
    data: [
      { id:1, VersionName:1.2, Status: 'IN PROGRESS', Progress: 0, Startdate: "01/07/2019", Releasedate: "10/07/2019", Description: 'Version 1.2' },
      {
        id:2, VersionName:1.3, Status: 'UNRELEASED', Progress: 30, Startdate: "01/07/2019", Releasedate: "11/07/2020", Description: 'Version 1.2'
      },
      {
        id:3, VersionName:2.1, Status: 'RELEASED', Progress: 100, Startdate: "01/07/2019", Releasedate: "02/07/2019", Description: 'Version 1.2'
      },
      {
        id:4, VersionName:2.2, Status: 'RELEASED', Progress: 100, Startdate: "01/07/2019", Releasedate: "03/07/2019", Description: 'Version 1.2'
      }
    ],
  });

  return (
    <MaterialTable
      title="Releases"
      columns={state.columns}
      data={state.data}
      options={{actionsColumnIndex: -1, draggable: true}}
      editable={{
        onRowAdd: (newData) =>
          new Promise((resolve) => {
            setTimeout(() => {
              resolve();
              setState((prevState) => {
                const data = [...prevState.data];
                data.push(newData);
                return { ...prevState, data };
              });
            }, 600);
          }),
        onRowUpdate: (newData, oldData) =>
          new Promise((resolve) => {
            setTimeout(() => {
              resolve();
              if (oldData) {
                setState((prevState) => {
                  const data = [...prevState.data];
                  data[data.indexOf(oldData)] = newData;
                  return { ...prevState, data };
                });
              }
            }, 600);
          }),
        onRowDelete: (oldData) =>
          new Promise((resolve) => {
            setTimeout(() => {
              resolve();
              setState((prevState) => {
                const data = [...prevState.data];
                data.splice(data.indexOf(oldData), 1);
                return { ...prevState, data };
              });
            }, 600);
          }),
      }}
    />
  );
}
