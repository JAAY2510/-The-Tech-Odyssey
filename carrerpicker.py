import pandas as pd
import numpy as np
from sklearn.linear_model import LinearRegression

# Sample data (replace with actual data)
data = {'Experience': [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        'Salary': [45000, 50000, 55000, 60000, 65000, 70000, 75000, 80000, 85000, 90000]}
df = pd.DataFrame(data)

# Split data into features (X) and target variable (y)
X = df[['Experience']]
y = df['Salary']

# Create a linear regression model
model = LinearRegression()

# Train the model
model.fit(X, y)

# Predict salary for a given experience
experience = 12  # Replace with the desired experience
predicted_salary = model.predict([[experience]])

print(f"Predicted Salary for {experience} years of experience: {predicted_salary[0]}")
