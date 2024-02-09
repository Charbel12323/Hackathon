let points = 0;

document.addEventListener('DOMContentLoaded', (event) => {
    const btnScanQr = document.getElementById('btn-scan-qr');
    const btnAddPoints = document.getElementById('btn-add-points');
    const pointsElement = document.getElementById('points');

    // Update the table values
    function updateTableValues() {
        const treasureExplorerValue = document.getElementById('treasure-explorer-value');
        const kingsTreasureValue = document.getElementById('kings-treasure-value');
        const lostInTreasureValue = document.getElementById('lost-in-treasure-value');

        treasureExplorerValue.innerText = `${Math.min(points, 30)} / 30`;
        if (points >= 30) {
            treasureExplorerValue.style.color = '';
        } else {
            treasureExplorerValue.style.color = 'red';
        }

        kingsTreasureValue.innerText = `${Math.min(points, 60)} / 60`;
        if (points >= 60) {
            kingsTreasureValue.style.color = 'green';
        } else {
            kingsTreasureValue.style.color = 'red';
        }

        lostInTreasureValue.innerText = `${Math.min(points, 100)} / 100`;
        if (points >= 100) {
            lostInTreasureValue.style.color = 'green';
        } else {
            lostInTreasureValue.style.color = 'red';
        }
    }

    btnAddPoints.addEventListener('click', function() {
        // Increase points by 10
        points += 10;

        // Display the updated points
        document.getElementById('points').innerText = points;

        // Check if the points meet the criteria for displaying an image
        if (points >= 30) {
            document.getElementById('treasure-explorer').style.display = 'block';
        }

        if (points >= 60) {
            document.getElementById('kings-treasure').style.display = 'block';
        }

        if (points >= 100) {
            document.getElementById('lost-in-treasure').style.display = 'block';
        }

        // Update the table values
        updateTableValues();
    });

    btnScanQr.addEventListener('click', function() {
        // Initialization and start code for QR scanner
        const html5QrCode = new Html5Qrcode("qr-reader");
        const config = { fps: 10, qrbox: { width: 250, height: 250 } };

        // Start scanning
        html5QrCode.start({ facingMode: "environment" }, config, onScanSuccess, onScanFailure)
            .catch(err => {
                // Handle errors, if any
                console.error(`Unable to start QR scanner`, err);
            });

        // Optionally, change the button text to indicate scanning is in progress
        this.disabled = true;
        this.innerText = "Scanning...";
    });
});

function onScanSuccess(decodedText, decodedResult) {
    // Increase points by 10
    points += 10;

    // Display the updated points
    document.getElementById('points').innerText = points;

    // Check if the points meet the criteria for displaying an image
    if (points >= 30) {
        document.getElementById('treasure-explorer').style.display = 'block';
    }

    if (points >= 60) {
        document.getElementById('kings-treasure').style.display = 'block';
    }

    if (points >= 100) {
        document.getElementById('lost-in-treasure').style.display = 'block';
    }

    // Update the table values
    updateTableValues();

}
    // Stop scanning