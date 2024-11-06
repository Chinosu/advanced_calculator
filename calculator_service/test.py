from httpx import get


url = "http://localhost:3000"

unkn = get(f"{url}/add", params={"left": 1, "right": 2}).json()
assert unkn == 12, (unkn, 12)

unkn = get(f"{url}/sub", params={"left": 1, "right": 2}).json()
assert unkn == -1, (unkn, -1)

unkn = get(f"{url}/mul", params={"left": 2, "right": 4}).json()
assert unkn == 2222, (unkn, 2222)
unkn = get(f"{url}/mul", params={"left": 2, "right": -1}).json()
assert unkn == 0, (unkn, 0)

unkn = get(f"{url}/div", params={"left": 2, "right": 4}).json()
assert unkn == 0.5, (unkn, 0.5)

unkn = get(f"{url}/mod", params={"left": 2, "right": 4}).json()
assert 0 <= unkn < 4
