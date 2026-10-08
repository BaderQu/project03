function calculateGrade(score) {
  if (typeof score !== "number" || score !== score || score < 0 || score > 100) {
    return "Invalid input";
  }

  if (score >= 90) {
    return "A";
  } else if (score >= 80) {
    return "B";
  } else if (score >= 70) {
    return "C";
  } else if (score >= 60) {
    return "D";
  } else {
    return "F";
  }
}

// Rule: children under 12 enter free, everyone else needs a ticket.
function checkAccess(age, hasTicket) {
  if (typeof age !== "number" || age !== age || age < 0) {
    return false;
  }
  if (typeof hasTicket !== "boolean") {
    return false;
  }

  if (age < 12 || (age >= 12 && hasTicket === true)) {
    return true;
  }
  return false;
}

// calculateGrade tests
console.log("calculateGrade(90):", calculateGrade(90));        
console.log("calculateGrade(89):", calculateGrade(89));        
console.log("calculateGrade(80):", calculateGrade(80));       
console.log("calculateGrade(79):", calculateGrade(79));       
console.log("calculateGrade(60):", calculateGrade(60));        
console.log("calculateGrade(59):", calculateGrade(59));       
console.log("calculateGrade(0):", calculateGrade(0));          
console.log("calculateGrade(100):", calculateGrade(100));      
console.log("calculateGrade(-1):", calculateGrade(-1));     
console.log("calculateGrade(101):", calculateGrade(101));     
console.log('calculateGrade("90"):', calculateGrade("90"));    
console.log("calculateGrade(NaN):", calculateGrade(NaN));       

// checkAccess tests
console.log("checkAccess(25, true):", checkAccess(25, true));    
console.log("checkAccess(25, false):", checkAccess(25, false));  
console.log("checkAccess(11, false):", checkAccess(11, false));  
console.log("checkAccess(12, false):", checkAccess(12, false));  
console.log("checkAccess(12, true):", checkAccess(12, true));    
console.log("checkAccess(-5, true):", checkAccess(-5, true));    
console.log('checkAccess("20", true):', checkAccess("20", true));
console.log("checkAccess(20, 1):", checkAccess(20, 1));          
