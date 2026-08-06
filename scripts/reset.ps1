param(
    [Parameter(Mandatory = $true)]
    [ValidatePattern('^[A-Za-z0-9_-]+$')]
    [string]$Name
)

$ErrorActionPreference = "Stop"

$projektRoot = Split-Path -Parent $PSScriptRoot
$vorlage = Join-Path $projektRoot "backup\start-original"
$showcaseQuelle = Join-Path $projektRoot "projekt\showcase"
$arbeitsplaetze = Join-Path $projektRoot "arbeitsplaetze"
$ziel = Join-Path $arbeitsplaetze $Name
$zielStart = Join-Path $ziel "start"
$zielShowcase = Join-Path $ziel "showcase"

if (-not (Test-Path $vorlage)) {
    throw "Die unveraenderte Vorlage fehlt: $vorlage"
}

if (-not (Test-Path $showcaseQuelle)) {
    throw "Der Showcase-Ordner fehlt: $showcaseQuelle"
}

New-Item -ItemType Directory -Force -Path $arbeitsplaetze | Out-Null

if (Test-Path $ziel) {
    $zeitstempel = Get-Date -Format "yyyyMMdd-HHmmss"
    $sicherung = "$ziel-vor-reset-$zeitstempel"
    Move-Item -Path $ziel -Destination $sicherung
    Write-Host "Bisheriger Stand gesichert unter:"
    Write-Host "  $sicherung"
}

New-Item -ItemType Directory -Force -Path $ziel | Out-Null
Copy-Item -Path $vorlage -Destination $zielStart -Recurse
Copy-Item -Path $showcaseQuelle -Destination $zielShowcase -Recurse

Write-Host ""
Write-Host "Arbeitsplatz bereit:"
Write-Host "  $zielStart"
Write-Host ""
Write-Host "Aufgabe:   $zielStart\index.html"
Write-Host "Showcase:  $zielShowcase\incidents.html"
Write-Host ""
Write-Host "Im Editor den Ordner 'start' oeffnen. Showcase bleibt ausserhalb der Aufgabe."
