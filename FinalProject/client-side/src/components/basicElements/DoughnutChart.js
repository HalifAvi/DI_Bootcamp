import '../BasicElementStyle/DoughnutChart.css';
import {Grid} from "@material-ui/core";
import Chart from "react-apexcharts";
import { connect } from "react-redux";


const DoughnutChart = ({       
    
    unitProtein,
    unitIron, 
    unitVitaminC,
    proteinCurrRecpie,
    ironCurrRecpie,
    vitaminCCurrRecpie

}) => {
    
    const options = {

        series: [

            unitProtein == "mg"? Number(proteinCurrRecpie)/1000 : Number(proteinCurrRecpie),
            unitIron == "mg"? Number(ironCurrRecpie)/1000 : Number(ironCurrRecpie),
            unitVitaminC == "mg"? Number(vitaminCCurrRecpie)/1000 : Number(vitaminCCurrRecpie) 

        ],
        labels: ["IRON [g]", "VITAMIN C [g]", "PROTEIN [g]"],
        colors: ["VAR(--clr-black)", "VAR(--clr-yellow)", "VAR(--clr-turquoise)"],
        plotOptions: {

            pie: {

                expandOnClick: false,
                donut: {
                    size: "55px",

                labels: {

                        show: true
                    }
                }
            }
        }
    };

    const series = [

        unitProtein == "mg"? Number(proteinCurrRecpie)/1000 : Number(proteinCurrRecpie),
        unitIron == "mg"? Number(ironCurrRecpie)/1000 : Number(ironCurrRecpie),
        unitVitaminC == "mg"? Number(vitaminCCurrRecpie)/1000 : Number(vitaminCCurrRecpie) 
    ]

    return(

        <div className={"doughnutChart-container"}>
            <Grid
                xs={12}
                style={{height: `${window.innerHeight}`, marginTop: "50px"}}
            >

            <Grid xs={12} item>
                <Grid xs={2} item></Grid>
                <Grid xs={8} item>
                    <Chart
                        options={options}
                        series={series}
                        type="donut"
                        width="150%"
                        height={300}
                    />
                </Grid>
                <Grid xs={2} item></Grid>
            </Grid>
            </Grid>
        </div>
    )
}

const mapStateToProps = (state) => {

    return {

        unitProtein: state.recipesReducer.unitProtein,
        unitIron: state.recipesReducer.unitIron, 
        unitVitaminC: state.recipesReducer.unitVitaminC,
        proteinCurrRecpie: state.recipesReducer.proteinCurrRecpie,
        ironCurrRecpie: state.recipesReducer.ironCurrRecpie,
        vitaminCCurrRecpie: state.recipesReducer.vitaminCCurrRecpie
    }
}

export default connect(mapStateToProps)(DoughnutChart);


