// @ts-ignore
import mqtt from 'mqtt';

// Create MQTT client and connect to server
const client = mqtt.connect('mqtt://100.101.1.7:31883');

client.on('connect', () => {
    console.log('Connected to MQTT broker');

    // Subscribe to a topic
    client.subscribe('hal/#', (err) => {
        if (err) {
            console.error('Failed to subscribe:', err);
        } else {
            console.log('Subscribed to hal/#');
        }
    });
});

// Handle incoming messages
client.on('message', (topic, message) => {
    console.log(`Received message on ${topic}`);

    // Assuming the message is a Buffer containing four bytes
    // if (message.length !== 4) {
    //     console.error('Expected 4 bytes, got', message.length);
    //     return;
    // }

    // Deserialize the data into an integer (in this case, a 32-bit float)
    // The '!' operator asserts that the Buffer has at least 4 bytes, as checked above.
    // const data = message.readFloatBE(0);
    //
    // console.log('Data:', data);

    console.log('Data:', message.toString());
});

client.on('error', (err) => {
    console.error('MQTT client error:', err);
});

client.on('close', () => {
    console.log('MQTT client disconnected');
});
