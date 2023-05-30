import csv
import random
from flask import Flask, request, jsonify, send_file, redirect, render_template, url_for
from flask_cors import CORS
import os

app = Flask(__name__)
CORS(app)

# Load the CSV file
with open('.\calorie.csv', 'r') as file:
    reader = csv.DictReader(file)
    data = [row for row in reader]

# Define a function to perform linear regression
def predict_calories_fat(height, weight, age):
    # Convert input data to float
    height = float(height)
    weight = float(weight)
    age = float(age)

    # Perform linear regression
    b0 = -131.076
    b1 = 1.0974 * weight + 0.000998 * height - 0.0267 * age + 79.484
    b2 = 0.0826 * weight - 0.0197 * height - 0.0137 * age + 2.47

    # Generate a random food type
    food_items = [
        'Grilled chicken',
        'Salmon fillet',
        'Quinoa salad',
        'Roasted vegetables',
        'Grilled tofu',
        'Baked sweet potato',
        'Mixed berries',
        'Greek yogurt',
        'Almonds',
        'Dark chocolate'
    ]
    food_type = random.choice(food_items)

    # Return the predicted values
    return {'calories': round(b1, 2), 'fat': round(b2, 2), 'food_type': food_type}
   

# Set up a route for the frontend
@app.route('/')
def index():
    return send_file(os.path.join(app.static_folder, 'index.html'))

# Define a Flask route to receive the input data and return the predicted values
@app.route('/predict', methods=['POST','GET'])
def predict():
    # Parse the input data as JSON
    data = request.get_json()

    # Call the function to perform linear regression
    result = predict_calories_fat(data['height'], data['weight'], data['age'])

    
    return jsonify(result)

    # Extract the predicted values from the result
    # calories = result['calories']
    # fat_intake = result['fat']
    # food_recommended = result['food_type']

   
    # return redirect(url_for('results', calories=calories, fat_intake=fat_intake, food_recommended=food_recommended))

# Define a Flask route to display the results
# @app.route('/results')
# def results():
#     # Parse the predicted values from the URL parameters
#     calories = request.args.get('calories')
#     fat = request.args.get('fat')
#     food_type = request.args.get('food_type')

#     # Render a template with the predicted values
#     return render_template('results.html', calories=calories, fat=fat, food_type=food_type)

if __name__ == '__main__':
    app.run(debug=True)
