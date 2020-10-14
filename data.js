var APP_DATA = {
  "scenes": [
    {
      "id": "0-garasi",
      "name": "Garasi",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "yaw": 0.4769340080578992,
        "pitch": 0.020604208786995315,
        "fov": 1.3010086119784674
      },
      "linkHotspots": [
        {
          "yaw": -0.37705036186889984,
          "pitch": 0.03839959642654378,
          "rotation": 6.283185307179586,
          "target": "1-ruang-tamu"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-ruang-tamu",
      "name": "Ruang Tamu",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.676304802505264,
          "pitch": 0.24289465128415344,
          "rotation": 0,
          "target": "2-kamar-bawah"
        },
        {
          "yaw": 1.815902138788191,
          "pitch": 0.17764452438477463,
          "rotation": 6.283185307179586,
          "target": "0-garasi"
        },
        {
          "yaw": -0.18528951317644626,
          "pitch": 0.06730213383851336,
          "rotation": 0,
          "target": "3-toilet-bawah"
        },
        {
          "yaw": 0.1570934442837153,
          "pitch": -0.25294196544028935,
          "rotation": 11.780972450961727,
          "target": "4-tangga"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.16380471135382813,
          "pitch": -0.5513170563781955,
          "title": "Menuju Lantai 2",
          "text": ""
        }
      ]
    },
    {
      "id": "2-kamar-bawah",
      "name": "Kamar Bawah",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.215452390522046,
          "pitch": 0.3297918450253299,
          "rotation": 0,
          "target": "1-ruang-tamu"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-toilet-bawah",
      "name": "Toilet Bawah",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.07359526434076,
          "pitch": 0.05741487721616423,
          "rotation": 10.995574287564278,
          "target": "1-ruang-tamu"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-tangga",
      "name": "Tangga",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.048828794740430226,
          "pitch": 0.3692522156818878,
          "rotation": 0,
          "target": "1-ruang-tamu"
        },
        {
          "yaw": 0.45802153680668134,
          "pitch": -0.38366610201106255,
          "rotation": 5.497787143782138,
          "target": "5-lantai-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-lantai-2",
      "name": "Lantai 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.4139658657637852,
          "pitch": 0.5588288789328537,
          "rotation": 1.5707963267948966,
          "target": "4-tangga"
        },
        {
          "yaw": 0.1742815513844178,
          "pitch": -0.018512123839657946,
          "rotation": 7.0685834705770345,
          "target": "6-kamar-1-lantai-2"
        },
        {
          "yaw": -0.5673890582987848,
          "pitch": -0.004439993236452722,
          "rotation": 7.0685834705770345,
          "target": "7-kamar-2-lantai-2"
        },
        {
          "yaw": 1.1932636928795137,
          "pitch": -0.03907844168934993,
          "rotation": 1.5707963267948966,
          "target": "8-toilet-atas"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-kamar-1-lantai-2",
      "name": "Kamar 1 (Lantai 2)",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.6383557722387962,
          "pitch": 0.21682233505397797,
          "rotation": 0,
          "target": "5-lantai-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-kamar-2-lantai-2",
      "name": "Kamar 2 (Lantai 2)",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.557900717793789,
          "pitch": 0.1272435592796466,
          "rotation": 10.995574287564278,
          "target": "5-lantai-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "8-toilet-atas",
      "name": "Toilet Atas",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.7913306656841774,
          "pitch": -0.02210778241644462,
          "rotation": 4.71238898038469,
          "target": "5-lantai-2"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
