import React, { useEffect, useState } from 'react';
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Dropdown } from 'primereact/dropdown';
import { Chart } from 'primereact/chart';
import '../assets/ultimate.css';


const Inicio = (props) => {
    const [organizations, setOrganizations] = useState([]);
    const [dataSet, setDataSet] = useState([]);
    const [selectedValue, setSelectedValue] = useState('Todas');
    const [sortedData, setSortedData] = useState([]);

    useEffect(() => {
        // Obtener datos desde API cuando se monta el componente
        fetchData();
    }, []);

    useEffect(() => {
        // Ordenar datos cuando cambia el valor seleccionado (ComboBox)
        sortData(selectedValue);
    }, [selectedValue]);

    const [chartData1, setChartData1] = useState(null);
    const [chartData2, setChartData2] = useState(null);

    useEffect(() => {
        // Creacion DataSets para Charts
        const CHL01Values = extractValues(sortedData, 'CHL-01');
        const SPM01Values = extractValues(sortedData, 'SPM-01');

        const CHL01Average = calculateAverage(CHL01Values);
        const SPM01Average = calculateAverage(SPM01Values);
        const CHL01Median = calculateMedian(CHL01Values);
        const SPM01Median = calculateMedian(SPM01Values);

        const data = {
            labels: ['Valores Promedio de Variables para ' + selectedValue],
            datasets: [
                {
                    label: 'CHL-01',
                    backgroundColor: '#eb8334',
                    data: [
                        CHL01Average || 0,
                    ]
                },
                {
                    label: 'SPM-01',
                    backgroundColor: '#66BB6A',
                    data: [
                        SPM01Average || 0,
                    ]
                }
            ]
        };

        const data2 = {
            labels: ['Valores Media de Variables para ' + selectedValue],
            datasets: [
                {
                    label: 'CHL-01',
                    backgroundColor: '#eb8334',
                    data: [
                        CHL01Median || 0,
                    ]
                },
                {
                    label: 'SPM-01',
                    backgroundColor: '#66BB6A',
                    data: [
                        SPM01Median || 0,
                    ]
                }
            ]
        };

        setChartData1(data);
        setChartData2(data2);
    }, [sortedData]);

    const fetchData = async () => {
        // Obtenemos datos desde API (Aca puede modificar EndPoints)
        try {
            var response = await fetch('http://127.0.0.1:8000/organizations-db');
            var jsonData = await response.json();
            setOrganizations([{ organization: 'Todas' }, ...jsonData]);
            response = await fetch('http://127.0.0.1:8000/dataset-db');
            jsonData = await response.json();
            setDataSet(jsonData);
            if (selectedValue === "Todas") {
                setSortedData(jsonData);
            }
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    const sortData = (value) => {
        // Filtrar los datos según el valor seleccionado
        var sorted;
        if (value === "Todas") {
            sorted = dataSet;
        } else {
            sorted = dataSet.filter(item => item.organization === value);
        }

        // Actualizar el estado de los datos ordenados
        setSortedData(sorted);
    };

    const handleChange = (event) => {
        // Actualizar el valor seleccionado cuando cambie el valor del ComboBox
        setSelectedValue(event.target.value.organization);
    };

    const customHeaderStyle = { backgroundColor: '#e0dddc' }

    return (
        <div className="content-section">
            <div className="container">
                <h5>Seleccione Organización: </h5>
                <Dropdown value={selectedValue} options={organizations} onChange={handleChange} optionLabel='organization' placeholder={selectedValue} />
                <br />
                <br />
                <div className="grid p-fluid">
                    <div className="col-12 lg:col-6">
                        <div className="card">
                            <h5>Promedio Variables: </h5>
                            <div className="flex justify-content-center">
                                {chartData1 && <Chart type="bar" data={chartData1} />}
                            </div>
                        </div>
                    </div>
                    <div className="col-12 lg:col-6">
                        <div className="card">
                            <h5>Media Variables: </h5>
                            <div className="flex justify-content-center">
                                {chartData2 && <Chart type="bar" data={chartData2} />}
                            </div>
                        </div>
                    </div>
                </div>
                <h5>DataSet: </h5>
                <DataTable value={sortedData}
                    responsiveLayout="scroll"
                    paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
                    dataKey="id"
                    paginator
                    emptyMessage="No se encuentran registros asociados"
                    className="datatable-responsive"
                    currentPageReportTemplate="Mostrando {first} a {last} de {totalRecords} registros"
                    rows={10}
                    rowHover
                    showGridlines >
                    <Column field="timestamp" header="TimeStamp" headerStyle={customHeaderStyle} sortable ></Column>
                    <Column field="variable" header="Variable" headerStyle={customHeaderStyle} sortable ></Column>
                    <Column field="organization" header="Organization" headerStyle={customHeaderStyle} sortable ></Column>
                    <Column field="value" header="Value" headerStyle={customHeaderStyle} sortable ></Column>
                    <Column field="ingestion_time" header="Ingestion Time" headerStyle={customHeaderStyle} sortable ></Column>
                </DataTable>
            </div>
        </div>
    );
};


// Extrae valores del campo "variable" del JSON consumido de API
const extractValues = (jsonData, variable) => {
    return jsonData
        .filter(item => item.variable === variable)
        .map(item => parseFloat(item.value) || 0);
};

// Calcula promedio
const calculateAverage = (values) => {
    if (values.length === 0) return null;
    const sum = values.reduce((acc, val) => acc + val, 0);
    return sum / values.length;
};

// Calcula media
const calculateMedian = (values) => {
    if (values.length === 0) return null;

    values.sort((a, b) => a - b);
    const middle = Math.floor(values.length / 2);

    if (values.length % 2 === 0) {
        return (values[middle - 1] + values[middle]) / 2;
    } else {
        return values[middle];
    }
};

const comparisonFn = function (prevProps, nextProps) {
    return prevProps.location.pathname === nextProps.location.pathname && prevProps.colorMode === nextProps.colorMode && prevProps.isNewThemeLoaded === nextProps.isNewThemeLoaded && prevProps.onNewThemeChange === nextProps.onNewThemeChange;
};

export default React.memo(Inicio, comparisonFn);
