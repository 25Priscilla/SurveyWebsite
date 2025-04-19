from selenium import webdriver
from selenium.webdriver.common.by import By
import time

driver = webdriver.Chrome()  # Make sure chromedriver is in PATH
driver.get("http://localhost:3000")

# Homepage
driver.find_element(By.LINK_TEXT, "Start").click()

# Basic Info Page
driver.find_element(By.NAME, "name").send_keys("Test User")
driver.find_element(By.NAME, "email").send_keys("test@example.com")
driver.find_element(By.NAME, "phone").send_keys("1234567890")
driver.find_element(By.ID, "nextButton").click()

# Survey Questions
driver.find_element(By.ID, "profession_software_engineer").click()
driver.find_element(By.ID, "interest_data_science").click()
driver.find_element(By.ID, "reference_linkedin").click()
driver.find_element(By.ID, "nextButton").click()

# Wait for response and Thank You page
time.sleep(3)
assert "Thank You for your Response!" in driver.page_source

driver.quit()
