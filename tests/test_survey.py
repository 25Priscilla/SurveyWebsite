from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.common.exceptions import TimeoutException
import time

# Set up driver
driver = webdriver.Chrome()
driver.maximize_window()
wait = WebDriverWait(driver, 10)

# URL where your app is running
base_url = "http://localhost:3000/SurveyWebsite"

def test_full_survey_flow():
    # HOME PAGE
    driver.get(base_url)
    try:
        wait.until(lambda d: "Welcome" in d.page_source)
        print("✅ Home page loaded")

        start_btn = wait.until(EC.element_to_be_clickable((By.XPATH, "//button[contains(text(), 'Start Survey')]")))
        driver.execute_script("arguments[0].click();", start_btn)
    except TimeoutException:
        print("❌ Home page failed to load")
        print(driver.page_source)
        return

    # BASIC INFO PAGE
    try:
        wait.until(EC.text_to_be_present_in_element((By.TAG_NAME, "body"), "Basic Details"))
        print("✅ Basic Info page loaded")

        driver.find_element(By.NAME, "name").send_keys("abc")
        driver.find_element(By.NAME, "email").send_keys("abc@example.com")
        driver.find_element(By.NAME, "phone").send_keys("9886400303")

        next_btn = wait.until(EC.element_to_be_clickable((By.XPATH, "//button[contains(text(), 'Next')]")))
        driver.execute_script("arguments[0].scrollIntoView(true);", next_btn)
        driver.execute_script("arguments[0].click();", next_btn)
        print("✅ Moved to Survey Questions page")
    except TimeoutException:
        print("❌ Failed to fill Basic Info or navigate")
        return

    # SURVEY QUESTIONS PAGE
    try:
        wait.until(EC.text_to_be_present_in_element((By.TAG_NAME, "body"), "Survey Questions"))
        print("✅ Survey Questions page loaded")

        questions_inputs = driver.find_elements(By.XPATH, "//input[@type='text']")
        questions_inputs[0].send_keys("Software Engineer")
        questions_inputs[1].send_keys("DSA")
        questions_inputs[2].send_keys("LinkedIn")

        next_btn = wait.until(EC.element_to_be_clickable((By.XPATH, "//button[contains(text(), 'Next')]")))
        driver.execute_script("arguments[0].scrollIntoView(true);", next_btn)
        driver.execute_script("arguments[0].click();", next_btn)
        print("✅ Moved to Responses page")
    except TimeoutException:
        print("❌ Survey Questions page failed to load or click")
        return

    # RESPONSES PAGE
    try:
        wait.until(EC.text_to_be_present_in_element((By.TAG_NAME, "body"), "Entered Details"))
        
        # Check if the content is rendered correctly, waiting for elements to be visible
        name_text = wait.until(EC.presence_of_element_located((By.XPATH, "//div[contains(text(), 'Name: abc')]")))
        email_text = wait.until(EC.presence_of_element_located((By.XPATH, "//div[contains(text(), 'Email: abc@example.com')]")))
        phone_text = wait.until(EC.presence_of_element_located((By.XPATH, "//div[contains(text(), 'Phone: 9886400303')]")))
        profession_text = wait.until(EC.presence_of_element_located((By.XPATH, "//div[contains(text(), 'Profession: Software Engineer')]")))
        interest_text = wait.until(EC.presence_of_element_located((By.XPATH, "//div[contains(text(), 'Interest: DSA')]")))
        reference_text = wait.until(EC.presence_of_element_located((By.XPATH, "//div[contains(text(), 'Reference: LinkedIn')]")))

        print("✅ Responses page verified")

        submit_btn = wait.until(EC.element_to_be_clickable((By.XPATH, "//button[contains(text(), 'Submit')]")))
        driver.execute_script("arguments[0].scrollIntoView(true);", submit_btn)
        driver.execute_script("arguments[0].click();", submit_btn)
        print("✅ Submitted the survey")
    except (TimeoutException, AssertionError):
        print("❌ Responses page validation failed")
        print(driver.page_source)
        return

    # THANK YOU PAGE
    try:
        wait.until(EC.text_to_be_present_in_element((By.TAG_NAME, "body"), "Thank You for your Response!"))
        print("✅ Thank You page reached")
    except TimeoutException:
        print("❌ Thank You page not reached")

# Run the test
try:
    test_full_survey_flow()
finally:
    time.sleep(2)  # Optional: to see final screen before close
    driver.quit()
