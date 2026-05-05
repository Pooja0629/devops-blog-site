# 🌐 DevOps Blog Deployment using AWS, Terraform & GitHub

## 📌 Project Overview

This project demonstrates a beginner-to-intermediate level DevOps workflow where a static blog website is deployed on AWS EC2 using Terraform and integrated with GitHub.

The focus of this project is **DevOps practices**, not just building a website.

---

## 🧠 Architecture

User → Browser → EC2 Instance → Nginx → Blog Website

---

## 🛠️ Tech Stack

* **AWS EC2** – Hosting the server
* **Nginx** – Web server
* **Terraform** – Infrastructure as Code
* **Git & GitHub** – Version control
* **Ubuntu** – Server OS

---

## 🚀 Features

* Infrastructure created using Terraform
* EC2 instance provisioning automated
* Website deployed using GitHub repository
* Public access via browser
* Real-time cloud deployment

---

## 📂 Project Structure

```

├── index.html
├── about.html
├── blog.html
├── style.css
├── script.js
├── main.tf
├── provider.tf
└── README.md
```

---

## ⚙️ Setup & Deployment Steps

### 1. Clone the Repository

```
git clone https://github.com/Pooja0629/devops-blog-site.git
```

---

### 2. Initialize Terraform

```
terraform init
```

---

### 3. Apply Terraform Configuration

```
terraform apply
```

---

### 4. Connect to EC2

* Use EC2 Instance Connect from AWS Console

---

### 5. Install Nginx

```
sudo apt update
sudo apt install nginx -y
sudo systemctl start nginx
```

---

### 6. Deploy Website

```
cd /var/www/html
sudo rm -rf *
sudo git clone https://github.com/Pooja0629/devops-blog-site.git .
```

---

### 7. Access Website

```
http://<your-public-ip>
```

---

## 🔐 Security Configuration

* Port 80 (HTTP) enabled for public access
* Port 22 (SSH) enabled for remote connection

---

## 🎯 Conclusion

This project demonstrates a complete beginner-friendly DevOps workflow using AWS and Terraform, focusing on real-world deployment and troubleshooting.

---

##  Contact

* Author: ***Pooja S***
* Email: [poojashree2266@gmail.com](mailto:poojashree2266@gmail.com)
* GitHub: [Pooja0629](https://github.com/Pooja0629)

