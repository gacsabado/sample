function showDescription(tabNumber) {
    var descriptionDiv = document.getElementById('Description');
    descriptionDiv.innerHTML = ''; // Clear previous content

    switch (tabNumber) {
        case 1:
            descriptionDiv.innerHTML = `
                <div class="case1">
                    <h1>Simple Computations in Javascript</h1>
                    <br>
                    <p>
                        Write a simple JavaScript program (in 1 HTML document file) that will ask for input values and convert into the following:
                    </p>
                    <br>
                    <ol>
                        <li>Fahrenheit to Celsius</li>
                        <li>Celsius to Fahrenheit</li>
                        <li>Meters to Feet</li>
                        <li>Feet to Meters</li>
                    </ol>
                    <br>
                    <div class="link">
                        <p>
                            <a href="/sweb/sabadocelsius.html">CLICK ME TO ACCESS THE FILE</a>
                        </p>
                    </div>
                </div>
            `;
            break;
        case 2:
            createIncomeTaxTable();
            break;
        case 3:
            descriptionDiv.innerHTML = `
                <div class="case3">
                    <h1>Nth Factorial, Sum and Average</h1>
                    <br>
                    <p> 
                        Write a Javascript Program (1 HTML File) that will input an integer value n and display (upon a button click) the following:
                    </p>
                    <br>
                    <ol>
                        <li>The nth factorial (Using a While Loop)</li>
                        <li>The sum of the first n numbers (Using a Do While Loop)</li>
                        <li>The Average of the first n numbers (Using a For Loop)</li>
                    </ol>
                    <br>
                    <div class="link">
                        <p>
                            <a href="/sweb/integervalue.html">CLICK ME TO ACCESS THE FILE</a>
                        </p>
                    </div>
                </div>
            `;
            break;
        case 4:
            descriptionDiv.innerHTML = `
                <div class="case4">
                    <h1>Simple Payroll</h1>
                    <br>
                    <p> 
                        Write a Javascript Program to Add, Delete employees in a payroll list.
                    </p>
                    <br>
                    <ol>
                        <li>The payroll program should input the following:</li>
                        <br>
                        <p>Employee Name         Days Worked          Daily Rate      Deduction Amount</p>
                        <br>
                        <li>During Addition, the program should display the following in a table:</li>
                        <br>
                        <p>No.    Employee Name      Days Worked      Daily Rate      Gross Pay     Deduction Amount    Net Pay</p>
                        <br>
                        <p>where:</p>
                        <br>
                        <p>
                            No. = is the Payroll List Line number
                            <br>
                            Gross Pay = Days Worked * Daily Rate
                            <br>
                            Net Pay = Gross Pay - Deduction Amount
                        </p>
                        <br>
                        <li>During Deletion, the program should ask for the Line Number to delete and update the table</li>
                    </ol>
                    <br>
                    <div class="link">
                        <p>
                            <a href="/sweb/simplepayroll.html">CLICK ME TO ACCESS THE FILE</a>
                        </p>
                    </div>
                </div>
            `;
            break;
        default:
            // Handle default case or add more cases as needed
            break;
    }
}

function createIncomeTaxTable() {
    // Data for the income tax table
    var incomeTaxData = [
        ["-", "P250,000", "P180,000.00", "0%", "P0.00"],
        ["P250,000", "P400,000", "P320,000.00", "20% of the excess over P250,000", "P14,000.00"],
        ["P400,000", "P800,000", "P520,000.00", "P30,000 + 25% of the excess over P400,000", "P60,000.00"],
        ["P800,000", "P2,000,000", "P930,000.00", "P130,000 + 30% of the excess over P800,000", "P169,000.00"],
        ["P2,000,000", "P8,000,000", "P2,400,000.00", "P490,000 + 32% of the excess over P2,000,000", "P618,000.00"],
        ["P8,000,000", "-", "P10,000,000.00", "P2,410,000 + 35% of the excess over P8,000,000", "P3,110,000.00"]
    ];

    // Create the table element
    var table = document.createElement("table");
    table.border = "1";

    // Create table header
    var headerRow = table.insertRow(0);
    var headers = ["Over (P)", "But Not Over (P)", "Taxable Income", "Basic Tax + Rate", "Income Tax"];
    for (var i = 0; i < headers.length; i++) {
        var headerCell = headerRow.insertCell(i);
        headerCell.innerHTML = headers[i];
    }

    // Populate the table with data
    for (var i = 0; i < incomeTaxData.length; i++) {
        var row = table.insertRow(i + 1);
        for (var j = 0; j < incomeTaxData[i].length; j++) {
            var cell = row.insertCell(j);
            cell.innerHTML = incomeTaxData[i][j];
        }
    }

    // Append the table to the "Description" div
    var descriptionDiv = document.getElementById('Description');
    descriptionDiv.innerHTML = `
        <div class="case2">
            <h1>Income Tax Calculator Program</h1>
            <br>
            <p>Input the Taxable Income and Compute the income tax using the following table:</p>
            <br>
            <ol>
                <li>*Note: Do not use prompts for user inputs. Use the HTML input tag.</li>
                <li>Income Tax = Basic tax + Rate</li>
            </ol>
            <br>
            <div class="link">
                <p><a href="/sweb/tax.html">CLICK ME TO ACCESS THE FILE</a></p>
            </div>
        </div>
    `;
    descriptionDiv.appendChild(table);
}

