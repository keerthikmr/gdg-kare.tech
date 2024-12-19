from locust import HttpUser, task, between

class GDGUser(HttpUser):
    wait_time = between(1, 3)  # Random wait between 1-3 seconds between tasks
    
    @task(10)  # Higher weight for homepage
    def homepage(self):
        self.client.get("/")
        
    @task(5)
    def events_page(self):
        self.client.get("/events")
        
    @task(5)
    def team_page(self):
        self.client.get("/team")
        
    @task(3)
    def contact_page(self):
        self.client.get("/contact")
        
    @task(7)  # Higher weight for join page as it's likely to get more traffic
    def join_page(self):
        self.client.get("/join")
        
    @task(4)
    def about_page(self):
        self.client.get("/about")

    def on_start(self):
        # Called when a user starts
        pass 