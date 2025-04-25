let statistics = {
    redCars: 21, 
    blueCars: 25, 
    greenCars: 12, 
    raceCars: 5, 
    blackCars: 40, 
    rareCars: 2 
}


for(const cars in statistics)
{
    if(cars[0] == 'r' || cars[1] == 'R' || statistics[cars] % 2 == 1)
    {
        console.log(`${cars}: ${statistics[cars]}`);
    }
}