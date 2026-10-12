// List of all car files (shared by script.js and month.js). Add new cars here.
const carFiles = [
    //Renault:
    "assets/data/cars/renault/R3.js", // ID 35
    "assets/data/cars/renault/R4.js", // ID 1
    "assets/data/cars/renault/R5.js", // ID 2
    "assets/data/cars/renault/R5P2.js", // ID 3
    "assets/data/cars/renault/R6.js", // ID 4
    "assets/data/cars/renault/R7.js", // ID 5
    "assets/data/cars/renault/R8.js", // ID 6
    "assets/data/cars/renault/R9.js", // ID 7
    "assets/data/cars/renault/R10.js", // ID 8
    "assets/data/cars/renault/R11.js", // ID 9
    "assets/data/cars/renault/R12.js", // ID 10
    "assets/data/cars/renault/R14.js", // ID 11
    "assets/data/cars/renault/R15.js", // ID 12
    "assets/data/cars/renault/R16.js", // ID 13
    "assets/data/cars/renault/R17.js", // ID 14
    "assets/data/cars/renault/R18.js", // ID 15
    "assets/data/cars/renault/R19.js", // ID 16
    "assets/data/cars/renault/R20.js", // ID 17
    "assets/data/cars/renault/R21.js", // ID 18
    "assets/data/cars/renault/R25.js", // ID 19
    "assets/data/cars/renault/R30.js", // ID 20
    "assets/data/cars/renault/Fuego.js", // ID 21
    "assets/data/cars/renault/R4CV.js", // ID 32
    "assets/data/cars/renault/Dauphine.js", // ID 33
    "assets/data/cars/renault/Floride.js", // ID 34
    // Alpine:
    "assets/data/cars/alpine/A610.js", // ID 22
    "assets/data/cars/alpine/A110.js", // ID 23
    "assets/data/cars/alpine/A310.js", // ID 24
    "assets/data/cars/alpine/GTA.js", // ID 25
    "assets/data/cars/alpine/A106.js", // ID 36
    "assets/data/cars/alpine/A108.js", // ID 37
    "assets/data/cars/alpine/GT4.js", // ID 38
    // Seat
    "assets/data/cars/seat/600.js", // ID 39
    "assets/data/cars/seat/850.js", // ID 40
    "assets/data/cars/seat/124.js", // ID 41
    "assets/data/cars/seat/1430.js", // ID 42
    "assets/data/cars/seat/1500.js", // ID 43
    "assets/data/cars/seat/1400.js", // ID 44
    "assets/data/cars/seat/127.js", // ID 45
    "assets/data/cars/seat/131.js", // ID 46
    // Peugeot:
    "assets/data/cars/peugeot/203.js", // ID 47
    "assets/data/cars/peugeot/403.js", // ID 48
    "assets/data/cars/peugeot/404.js", // ID 49
    "assets/data/cars/peugeot/504.js", // ID 50
    "assets/data/cars/peugeot/504-coupe.js", // ID 51
    "assets/data/cars/peugeot/205.js", // ID 52
    "assets/data/cars/peugeot/405.js", // ID 54
    // Citroën:
    "assets/data/cars/citroen/2cv.js",           // ID 55
    "assets/data/cars/citroen/traction-avant.js", // ID 56
    "assets/data/cars/citroen/ds.js",            // ID 57
    "assets/data/cars/citroen/gs.js",            // ID 58
    "assets/data/cars/citroen/cx.js",            // ID 59
    "assets/data/cars/citroen/bx.js",            // ID 60
    "assets/data/cars/citroen/sm.js",             // ID 61
    // LM Sovra:
    "assets/data/cars/lm-sovra/lm-sovra.js", // ID 62
    "assets/data/cars/lm-sovra/lm1.js", // ID 63
    "assets/data/cars/lm-sovra/lm2.js", // ID 64
    "assets/data/cars/lm-sovra/lm3.js", // ID 65
    "assets/data/cars/lm-sovra/lm5.js", // ID 66
    // BMW:
    "assets/data/cars/bmw/isetta.js", // ID 67
    "assets/data/cars/bmw/2002.js", // ID 68
    "assets/data/cars/bmw/e9.js", // ID 69
    "assets/data/cars/bmw/e21.js", // ID 70
    "assets/data/cars/bmw/e30.js", // ID 71
    "assets/data/cars/bmw/e12.js", // ID 72
    "assets/data/cars/bmw/e28.js", // ID 73
    "assets/data/cars/bmw/e34.js", // ID 74
    "assets/data/cars/bmw/e24.js", // ID 75
    "assets/data/cars/bmw/m1.js", // ID 76
    "assets/data/cars/bmw/z1.js", // ID 77
    "assets/data/cars/bmw/e36.js", // ID 78
    // Mercedes-Benz:
    "assets/data/cars/mercedes/300sl-w198.js", // ID 79
    "assets/data/cars/mercedes/ponton.js", // ID 80
    "assets/data/cars/mercedes/fintail-w111.js", // ID 81
    "assets/data/cars/mercedes/pagoda-w113.js", // ID 82
    "assets/data/cars/mercedes/w108.js", // ID 83
    "assets/data/cars/mercedes/r107.js", // ID 84
    "assets/data/cars/mercedes/w116.js", // ID 85
    "assets/data/cars/mercedes/w123.js", // ID 86
    "assets/data/cars/mercedes/w126.js", // ID 87
    "assets/data/cars/mercedes/w201.js", // ID 88
    "assets/data/cars/mercedes/w124.js", // ID 89
    "assets/data/cars/mercedes/g-w460.js", // ID 90
    "assets/data/cars/mercedes/r129.js", // ID 91
    // Land Rover Santana:
    "assets/data/cars/santana/S88.js", // ID 26
    "assets/data/cars/santana/S109.js", // ID 27
    "assets/data/cars/santana/SLi.js", // ID 28
    "assets/data/cars/santana/S2000.js", // ID 29
    "assets/data/cars/santana/S2500.js", // ID 30
    "assets/data/cars/santana/SCazorla.js", // ID 31
    // Simca:
    "assets/data/cars/simca/aronde.js", // ID 92
    "assets/data/cars/simca/1000.js", // ID 93
    "assets/data/cars/simca/1100.js", // ID 94
    "assets/data/cars/simca/1300-1500.js", // ID 95
    "assets/data/cars/simca/1200s.js", // ID 96
    "assets/data/cars/simca/1307-1308.js", // ID 97
    // Barreiros (Chrysler España):
    "assets/data/cars/barreiros/dodge-dart.js", // ID 98
    "assets/data/cars/barreiros/dodge-3700.js", // ID 99
    "assets/data/cars/barreiros/chrysler-180.js", // ID 100
    // Talbot:
    "assets/data/cars/talbot/sunbeam-lotus.js", // ID 101
    "assets/data/cars/talbot/horizon.js", // ID 102
    "assets/data/cars/talbot/solara.js", // ID 103
    "assets/data/cars/talbot/tagora.js", // ID 104
    "assets/data/cars/talbot/samba.js", // ID 105
    // Authi:
    "assets/data/cars/authi/mini.js", // ID 106
    "assets/data/cars/authi/morris-1300.js", // ID 107
    "assets/data/cars/authi/mg-1300.js", // ID 108
    "assets/data/cars/authi/victoria.js", // ID 109
    // Ford:
    "assets/data/cars/ford/mustang.js", // ID 110
    "assets/data/cars/ford/taunus.js", // ID 111
    "assets/data/cars/ford/escort-mk1.js", // ID 112
    "assets/data/cars/ford/escort-mk2.js", // ID 113
    "assets/data/cars/ford/capri.js", // ID 114
    "assets/data/cars/ford/fiesta-mk1.js", // ID 115
    "assets/data/cars/ford/sierra.js", // ID 116
    // Volkswagen:
    "assets/data/cars/volkswagen/beetle.js", // ID 117
    "assets/data/cars/volkswagen/t1.js", // ID 118
    "assets/data/cars/volkswagen/t2.js", // ID 119
    "assets/data/cars/volkswagen/karmann-ghia.js", // ID 120
    "assets/data/cars/volkswagen/golf-mk1.js", // ID 121
    "assets/data/cars/volkswagen/scirocco.js", // ID 122
    "assets/data/cars/volkswagen/golf-mk2.js", // ID 123
    // Pegaso:
    "assets/data/cars/pegaso/z102.js", // ID 124
    "assets/data/cars/pegaso/z103.js", // ID 125
    // Fiat:
    "assets/data/cars/fiat/500.js", // ID 126
    "assets/data/cars/fiat/600.js", // ID 127
    "assets/data/cars/fiat/dino.js", // ID 128
    "assets/data/cars/fiat/124.js", // ID 129
    "assets/data/cars/fiat/124-spider.js", // ID 130
    "assets/data/cars/fiat/128.js", // ID 131
    "assets/data/cars/fiat/127.js", // ID 132
    "assets/data/cars/fiat/x19.js", // ID 133
    "assets/data/cars/fiat/131.js", // ID 134
    // Lancia:
    "assets/data/cars/lancia/aurelia.js", // ID 135
    "assets/data/cars/lancia/fulvia.js", // ID 136
    "assets/data/cars/lancia/stratos.js", // ID 137
    "assets/data/cars/lancia/montecarlo.js", // ID 138
    "assets/data/cars/lancia/037.js", // ID 139
    "assets/data/cars/lancia/delta-integrale.js", // ID 140
];
