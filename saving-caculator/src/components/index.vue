<template>
<section id="caculator">
    <header>
        <h1>Saving Calculator</h1>
    </header>
        <h2>Estimate</h2>
    <table>
    <tr>
        <td>
            <label>Saving:</label>
        </td>
        <td>
            <input type="text" v-model="savingOrigin" />
        </td>
        
    </tr>
    <tr>
        <td>
            <label>Saving Increase:</label>
        </td>
        <td>
            <input type="text" v-model="savingIncrease" /> per caculating period
            <!-- <input class="days" type="text" v-model="periodYIncrease" />  -->
        </td>
        
    </tr>
    <tr>
        <td>
            <label>Annual Interest Rate:</label>
        </td>
        <td>
            <input class="period" type="text" v-model="interestRate" /> % per 
            <input class="days" type="text" v-model="periodI"  /> days
        </td>
        
    </tr>
    <tr>
        <td>
            <label>Period:</label>
        </td>
        <td>
            <input class="period" type="text"  v-model="periodY"  /> Year
            <input class="period" type="text"  v-model="periodM"  /> Month
        </td>
        <td></td>
    </tr>
    </table>
    <button @click="onSibmit" >Submit</button>
    <div v-if="result" class="result">
        <p>Result</p>
        <p>Original saving: <span>{{savingOrigin}}</span> </p>
        <p>Saving <span>{{savingIncrease? savingIncrease: "....."}}</span> per caculating period</p>
        <p>at <span>{{interestRate}}</span> % (annual interest rate) / <span>{{periodI}}</span> days</p>
        <p>for <span>{{periodY?periodY:0}}</span> year(s) and <span>{{periodM?periodM:0}}</span> month(s)</p>
        <p>Total Input: <span>{{totalInput}}</span></p>
        <p>You will get:</p>
        <h3><span>{{result}}</span></h3>
    </div>
</section>
</template>

<script>
    export default {
    name: "index",
    props: {
        msg: String
        },
    data() {
        return {
            savingOrigin: "",
            savingIncrease: "",
            periodYIncrease: "",
            interestRate: "",
            periodY:"",
            periodM:"",
            periodI:"",
            days: "",
            saving:"",
            result: "", 
            interest:"",
            totalInput:""
        };
    },
    methods:{
        onSibmit(){
            
            var d = this.days,
                iT =parseFloat( this.interest),
                s = this.savingOrigin,
                iR = this.interestRate,
                iD = this.periodI,
                sI = this.savingIncrease
            
                s = parseFloat(s)
                sI = parseFloat(sI);
            d = this.periodY * 365 + this.periodM * 30;
            var iCycle = d / iD;
            iCycle = parseInt(iCycle);
            this.totalInput = s + sI * iCycle;
            for( var i = 0; i < iCycle; i++ ){
                
                s += sI;
                iT = s  * iR / 100 / 365 * iD
                console.log( s += iT)
            }
            
            this.result = s;

            return this.result
        },
    },
    computed:{
        random(){
            return Math.random()
        }
    }
    };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
* {
box-sizing: border-box;
}

html {
font-family: "Jost", sans-serif;
}

body {
margin: 0;
}

header {
box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
margin: 3rem;
border-radius: 10px;
padding: 1rem;
background-color: #1b995e;
color: white;
text-align: center;
}

#caculator {
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
    margin: 3rem;
    border-radius: 10px;
    padding: 1rem;
    text-align: center;
    margin: auto;
    table{
        text-align: left;
        margin: auto;
        tr{
            height: 50px;
        }
    }
    h2 {
        font-size: 2rem;
        border-bottom: 4px solid #ccc;
        color: #1b995e;
        margin: 0 0 1rem 0;
    }
    .result{
        width: 100%;
        background-color: #8ddba4;
        padding: 0.5rem;
        border-radius: 10px;
    }
    p {
        &:first-of-type{
            text-align: center;
            font-size: 24px;
            color: white;
        }
        text-align: left;
        display: block;
        font-size: 1rem;
        font-weight: bold;
        color: #1f1f1f;
        width: 60%;
        margin: 10px auto;
        span{
            font-weight: 800;
            font-size: 1.2rem;
        }
    }
    h3{
        line-height: 0.8rem;
    }
    input {
    font: inherit;
    border: 1px solid #ccc;
    &.period{
        width: 100px;
    }
    &.days{
        width: 90px;
    }
    &:focus {
        outline: none;
        border-color: #1b995e;
        background-color: #d7fdeb;
        }
    }

    button {
        margin: 20px auto;
        font: inherit;
        cursor: pointer;
        border: 1px solid #ff0077;
        background-color: #ff0077;
        color: white;
        padding: 0.05rem 1rem;
        box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.26);

        &:hover, &:active {
        background-color: #ec3169;
        border-color: #ec3169;
        box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.26);
        }
    }
}
</style>
