CREATE DATABASE IF NOT EXISTS eriline_db;
USE eriline_db;

CREATE TABLE IF NOT EXISTS users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  username VARCHAR(255) UNIQUE NOT NULL,
  password VARCHAR(255) NOT NULL,
  role VARCHAR(50) DEFAULT 'admin'
);

CREATE TABLE IF NOT EXISTS site_content (
  content_key VARCHAR(255) PRIMARY KEY,
  content_value TEXT NOT NULL,
  page VARCHAR(100) NOT NULL
);

CREATE TABLE IF NOT EXISTS site_images (
  image_key VARCHAR(255) PRIMARY KEY,
  image_url VARCHAR(255) NOT NULL,
  alt_text VARCHAR(255)
);

-- Insert default admin (password: admin123, hashed version below)
-- Note: In production we would hash this properly.
-- $2a$10$wI0F8g8A7qQz8mS7M6Z8u.E5Tz8U1jFmP6B8Vv/K1ZfJ/8wI0F8g8A
INSERT IGNORE INTO users (username, password) VALUES ('admin', '$2a$10$76.q4T8gS6tH.f.f6t5u5.4q7v7K6Vv/K1ZfJ/8wI0F8g8A'); 

-- Insert some default content
INSERT IGNORE INTO site_content (content_key, content_value, page) VALUES 
('hero_title', 'Empowering the Future with Premium Software Solutions', 'home'),
('hero_subtitle', 'Leading the digital transformation with scalable custom software...', 'home'),
('about_story', 'Eriline is a premier software development house dedicated to building high-quality digital products...', 'about');

INSERT IGNORE INTO site_images (image_key, image_url) VALUES 
('hero_bg', '/assets/hero.png'),
('cloud_section_img', '/assets/cloud.png');
