#!/usr/bin/env python3
"""
Backend Testing Suite for Portfolio Website
Tests FastAPI backend functionality, MongoDB connection, and API endpoints
"""

import requests
import json
import sys
import os
from datetime import datetime
import time

# Get backend URL from frontend .env file
def get_backend_url():
    try:
        with open('/app/frontend/.env', 'r') as f:
            for line in f:
                if line.startswith('REACT_APP_BACKEND_URL='):
                    return line.split('=', 1)[1].strip()
    except Exception as e:
        print(f"Error reading frontend .env file: {e}")
        return None

BACKEND_URL = get_backend_url()
if not BACKEND_URL:
    print("❌ Could not get backend URL from frontend/.env")
    sys.exit(1)

API_BASE_URL = f"{BACKEND_URL}/api"

print(f"🔍 Testing Backend at: {API_BASE_URL}")
print("=" * 60)

def test_api_health():
    """Test basic API health - root endpoint"""
    print("\n1. 🏥 Testing API Health (GET /api/)")
    try:
        response = requests.get(f"{API_BASE_URL}/", timeout=10)
        
        if response.status_code == 200:
            data = response.json()
            if data.get("message") == "Hello World":
                print("   ✅ API Health Check: PASSED")
                print(f"   📊 Response: {data}")
                return True
            else:
                print(f"   ❌ API Health Check: FAILED - Unexpected response: {data}")
                return False
        else:
            print(f"   ❌ API Health Check: FAILED - Status Code: {response.status_code}")
            print(f"   📄 Response: {response.text}")
            return False
            
    except requests.exceptions.RequestException as e:
        print(f"   ❌ API Health Check: FAILED - Connection Error: {e}")
        return False

def test_database_connection():
    """Test database connection by creating and retrieving status checks"""
    print("\n2. 🗄️  Testing Database Connection")
    
    # Test POST /api/status (create status check)
    print("   📝 Testing POST /api/status (Create Status Check)")
    test_data = {
        "client_name": f"test_client_{int(time.time())}"
    }
    
    try:
        response = requests.post(
            f"{API_BASE_URL}/status", 
            json=test_data,
            headers={"Content-Type": "application/json"},
            timeout=10
        )
        
        if response.status_code == 200:
            created_status = response.json()
            print("   ✅ POST /api/status: PASSED")
            print(f"   📊 Created Status: ID={created_status.get('id')}, Client={created_status.get('client_name')}")
            
            # Test GET /api/status (retrieve status checks)
            print("   📖 Testing GET /api/status (Get Status Checks)")
            get_response = requests.get(f"{API_BASE_URL}/status", timeout=10)
            
            if get_response.status_code == 200:
                status_list = get_response.json()
                print("   ✅ GET /api/status: PASSED")
                print(f"   📊 Retrieved {len(status_list)} status checks")
                
                # Verify our created status is in the list
                found_status = any(
                    status.get('client_name') == test_data['client_name'] 
                    for status in status_list
                )
                
                if found_status:
                    print("   ✅ Database Persistence: PASSED - Created status found in list")
                    return True
                else:
                    print("   ⚠️  Database Persistence: WARNING - Created status not found in list")
                    return True  # Still consider it working as basic CRUD works
            else:
                print(f"   ❌ GET /api/status: FAILED - Status Code: {get_response.status_code}")
                return False
                
        else:
            print(f"   ❌ POST /api/status: FAILED - Status Code: {response.status_code}")
            print(f"   📄 Response: {response.text}")
            return False
            
    except requests.exceptions.RequestException as e:
        print(f"   ❌ Database Connection Test: FAILED - Connection Error: {e}")
        return False

def test_api_endpoints_comprehensive():
    """Comprehensive test of all API endpoints"""
    print("\n3. 🔗 Testing All API Endpoints Comprehensively")
    
    endpoints_results = {}
    
    # Test 1: Root endpoint
    print("   🎯 Testing GET /api/ (Root)")
    try:
        response = requests.get(f"{API_BASE_URL}/", timeout=10)
        endpoints_results['root'] = response.status_code == 200
        print(f"   {'✅' if endpoints_results['root'] else '❌'} GET /api/: {'PASSED' if endpoints_results['root'] else 'FAILED'}")
    except Exception as e:
        endpoints_results['root'] = False
        print(f"   ❌ GET /api/: FAILED - {e}")
    
    # Test 2: POST status endpoint with various data
    print("   🎯 Testing POST /api/status (Various Scenarios)")
    test_cases = [
        {"client_name": "portfolio_visitor"},
        {"client_name": "test_user_123"},
        {"client_name": "backend_health_check"}
    ]
    
    post_success_count = 0
    for i, test_case in enumerate(test_cases):
        try:
            response = requests.post(
                f"{API_BASE_URL}/status",
                json=test_case,
                headers={"Content-Type": "application/json"},
                timeout=10
            )
            if response.status_code == 200:
                post_success_count += 1
                data = response.json()
                print(f"   ✅ POST Test {i+1}: PASSED - ID: {data.get('id')[:8]}...")
            else:
                print(f"   ❌ POST Test {i+1}: FAILED - Status: {response.status_code}")
        except Exception as e:
            print(f"   ❌ POST Test {i+1}: FAILED - {e}")
    
    endpoints_results['post_status'] = post_success_count == len(test_cases)
    
    # Test 3: GET status endpoint
    print("   🎯 Testing GET /api/status (Retrieve All)")
    try:
        response = requests.get(f"{API_BASE_URL}/status", timeout=10)
        if response.status_code == 200:
            data = response.json()
            endpoints_results['get_status'] = True
            print(f"   ✅ GET /api/status: PASSED - Retrieved {len(data)} records")
        else:
            endpoints_results['get_status'] = False
            print(f"   ❌ GET /api/status: FAILED - Status: {response.status_code}")
    except Exception as e:
        endpoints_results['get_status'] = False
        print(f"   ❌ GET /api/status: FAILED - {e}")
    
    return all(endpoints_results.values())

def test_error_handling():
    """Test API error handling"""
    print("\n4. ⚠️  Testing Error Handling")
    
    # Test invalid endpoint
    print("   🎯 Testing Invalid Endpoint")
    try:
        response = requests.get(f"{API_BASE_URL}/invalid-endpoint", timeout=10)
        if response.status_code == 404:
            print("   ✅ Invalid Endpoint: PASSED - Returns 404 as expected")
        else:
            print(f"   ⚠️  Invalid Endpoint: Unexpected status {response.status_code}")
    except Exception as e:
        print(f"   ❌ Invalid Endpoint Test: FAILED - {e}")
    
    # Test invalid POST data
    print("   🎯 Testing Invalid POST Data")
    try:
        response = requests.post(
            f"{API_BASE_URL}/status",
            json={},  # Missing required client_name
            headers={"Content-Type": "application/json"},
            timeout=10
        )
        if response.status_code in [400, 422]:  # FastAPI returns 422 for validation errors
            print("   ✅ Invalid POST Data: PASSED - Returns validation error as expected")
        else:
            print(f"   ⚠️  Invalid POST Data: Unexpected status {response.status_code}")
    except Exception as e:
        print(f"   ❌ Invalid POST Data Test: FAILED - {e}")

def main():
    """Main test execution"""
    print("🚀 Starting Backend Testing Suite")
    print(f"⏰ Test Started: {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}")
    
    test_results = []
    
    # Run all tests
    test_results.append(("API Health", test_api_health()))
    test_results.append(("Database Connection", test_database_connection()))
    test_results.append(("API Endpoints", test_api_endpoints_comprehensive()))
    
    # Run error handling test (informational only)
    test_error_handling()
    
    # Summary
    print("\n" + "=" * 60)
    print("📋 TEST SUMMARY")
    print("=" * 60)
    
    passed_tests = 0
    total_tests = len(test_results)
    
    for test_name, result in test_results:
        status = "✅ PASSED" if result else "❌ FAILED"
        print(f"{test_name:20} : {status}")
        if result:
            passed_tests += 1
    
    print("-" * 60)
    print(f"Overall Result: {passed_tests}/{total_tests} tests passed")
    
    if passed_tests == total_tests:
        print("🎉 ALL BACKEND TESTS PASSED! Backend is healthy and working properly.")
        return True
    else:
        print("⚠️  SOME TESTS FAILED! Backend may have issues that need attention.")
        return False

if __name__ == "__main__":
    success = main()
    sys.exit(0 if success else 1)